function init_radar() {

    document.title = radar_page_title;
    $('#title').text(radar_title);
    $('#site-subtitle').text(radar_sub_title);
    $('#authors').append(
            "<p>This edition of the radar is brought to you by: "
                    + radar_authors.join(", "));
    if (previous_radar) {
          $('#authors').append(
            " [<a href='?date="
              + previous_radar
              + "'>Previous edition</a>]</p><br/>");
    }
    $('#authors').append("</p><br/>");

    var radar = new pv.Panel().width(w).height(h).canvas('radar')

    // arcs
    radar.add(pv.Dot).data(radar_arcs.slice(0).reverse()).left(w / 2).bottom(
            h / 2).radius(function(d) {
        return d.r;
    }).strokeStyle("#ccc").fillStyle(function(d) {
        return d.f;
    }).anchor("top").add(pv.Label).text(function(d) {
        return d.name;
    });

    // quadrant lines -- vertical
    var lqidx = radar_arcs.length - 1;
    radar.add(pv.Line)
            .data(
                    [ (h / 2 - radar_arcs[lqidx].r),
                            h - (h / 2 - radar_arcs[lqidx].r) ]).lineWidth(1)
            .left(w / 2).bottom(function(d) {
                return d;
            }).strokeStyle("#777");

    // quadrant lines -- horizontal
    radar.add(pv.Line)
            .data(
                    [ (w / 2 - radar_arcs[lqidx].r),
                            w - (w / 2 - radar_arcs[lqidx].r) ]).lineWidth(1)
            .bottom(h / 2).left(function(d) {
                return d;
            }).strokeStyle("#777");

    // Quadrant Ledgends
    var radar_quadrant_ctr = 1;
    var quadrantFontSize = 18;
    var headingFontSize = 14;
    var stageHeadingCount = 0;
    var lastRadius = 0;
    var lastQuadrant = '';
    var spacer = 6;
    var fontSize = 10;
    var total_index = 1;

    // TODO: Super fragile: re-order the items, by radius, in order to logically
    // group by the rings.
    for (var i = 0; i < radar_data.length; i++) {
        // adjust top by the number of headings.
        if (lastQuadrant != radar_data[i].quadrant) {
            $('#details').append(
                    "<h2>" + radar_data[i].quadrant + "</h2><div id='quadrant-"
                            + radar_data[i].quadrant + "'></div><br/>");

            radar.add(pv.Label).left(radar_data[i].left).top(radar_data[i].top)
                    .text(radar_data[i].quadrant).strokeStyle(
                            radar_data[i].color).fillStyle(radar_data[i].color)
                    .font(quadrantFontSize + "px sans-serif");

            lastQuadrant = radar_data[i].quadrant;
        }

        var itemsByStage = _.groupBy(radar_data[i].items, function(item) {
            return Math.floor(item.pc.r / 100)
        });

        for ( var stageIdx in _(itemsByStage).keys()) {
            var items = itemsByStage[stageIdx];
            for ( var itemIdx in items) {
                items[itemIdx].quadrant = radar_data[i].quadrant;
            }
        }

        var offsetIndex = 0;

        for ( var stageIdx in _(itemsByStage).keys()) {
            if (stageIdx > 0) {
                offsetIndex = offsetIndex + itemsByStage[stageIdx - 1].length
                        + 1;
                console.log("offsetIndex = "
                        + itemsByStage[stageIdx - 1].length, offsetIndex);
            }

            radar.add(pv.Label).left(radar_data[i].left + headingFontSize).top(
                    radar_data[i].top + quadrantFontSize + spacer
                            + (stageIdx * headingFontSize)
                            + (offsetIndex * fontSize)).text(
                    radar_arcs[stageIdx].name).strokeStyle('#cccccc')
                    .fillStyle('#cccccc').font(
                            headingFontSize + "px Courier New");

            radar.add(pv.Label).left(radar_data[i].left).top(
                    radar_data[i].top + quadrantFontSize + spacer
                            + (stageIdx * headingFontSize)
                            + (offsetIndex * fontSize)).strokeStyle(
                    radar_data[i].color).fillStyle(radar_data[i].color).add(
                    pv.Dot).def(
                    "i",
                    radar_data[i].top + quadrantFontSize + spacer
                            + (stageIdx * headingFontSize) + spacer
                            + (offsetIndex * fontSize)).data(
                    itemsByStage[stageIdx]).top(function() {
                return (this.i() + (this.index * fontSize));
            }).shape(function(d) {
                return (d.movement === 't' ? "triangle" : "circle");
            }).cursor(function(d) {
                return (d.url !== undefined ? "pointer" : "auto");
            }).event("click", function(d) {
                if (d.url !== undefined) {
                    self.location = d.url
                }
            }).size(fontSize).angle(45).anchor("right").add(pv.Label).text(
                    function(d) {
                        d.url = "#item-" + radar_quadrant_ctr;
                        console.log(d.quadrant);
                        $('#quadrant-' + d.quadrant).append(
                                "<a name='item-" + radar_quadrant_ctr
                                        + "'/><h3>" + d.name + "</h3><p>"
                                        + d.text + "</p>");

                        return radar_quadrant_ctr++ + ". " + d.name;
                    });

            radar.add(pv.Dot).def("active", false).data(itemsByStage[stageIdx])
                    .size(function(d) {
                        return (d.blipSize !== undefined ? d.blipSize : 70);
                    }).left(function(d) {
                        var x = polar_to_raster(d.pc.r, d.pc.t)[0];
                        return x;
                    }).bottom(function(d) {
                        var y = polar_to_raster(d.pc.r, d.pc.t)[1];
                        return y;
                    }).title(function(d) {
                        return d.name;
                    }).cursor(function(d) {
                        return (d.url !== undefined ? "pointer" : "auto");
                    }).event("click", function(d) {
                        if (d.url !== undefined) {
                            self.location = d.url
                        }
                    }).angle(Math.PI) // 180 degrees in radians !
                    .strokeStyle(radar_data[i].color).fillStyle(
                            radar_data[i].color).shape(function(d) {
                        return (d.movement === 't' ? "triangle" : "circle");
                    }).anchor("center").add(pv.Label).text(function(d) {
                        return total_index++;
                    }).textBaseline("middle").textStyle("white");

        }
    }

    radar.anchor('radar');
    radar.render();
};