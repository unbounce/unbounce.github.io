function polar_to_cartesian(r, t) {
  // radians to degrees, requires the t*pi/180
  var x = r * Math.cos((t * Math.PI / 180));
  var y = r * Math.sin((t * Math.PI / 180));
  return [ x, y ];
}

function cartesian_to_raster(x, y) {
  var rx = w / 2 + x;
  var ry = h / 2 + y;
  return [ rx, ry ];
}

function raster_to_cartesian(rx, ry) {
  var x = rx - w / 2;
  var y = ry - h / 2;
  return [ x, y ];
}

function polar_to_raster(r, t) {
  var xy = polar_to_cartesian(r, t);
  return cartesian_to_raster(xy[0], xy[1]);
}

function get_url_param(name) {
  var results = new RegExp('[\?&]' + name + '=([^&#]*)')
    .exec(window.location.href);
  if (results == null) {
    return null;
  } else {
    return results[1] || 0;
  }
}

function load_ub_tech_radar(timestamp) {
  var radarResource = "/radars/unbounce_tech_radar_" + timestamp + ".js";

  console.log("Loading radar resource: " + radarResource);

  $.getScript(radarResource, function(data, textStatus, jqxhr) {
    console.log("Loaded radar resource: " + radarResource);
  });
}