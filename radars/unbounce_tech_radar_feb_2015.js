var radar_title = "February 2015";
document.title = "Unbounce Technology Radar | " + radar_title;

var radar_arcs = [
                   {'r':100,'name':'Using'}
                  ,{'r':200,'name':'Adopting'}
                  ,{'r':300,'name':'Considering'}
                  ,{'r':400,'name':'Retiring'}
                 ];

var h = 1000;
var w = 1200;

var radar_data = [
{
    "quadrant": "Cloud",
    "left" : 45,
    "top" : 18,
    "color" : "#0098db",
    "items" : [
               {"name":"EC2", "pc":{"r":25,"t":45},
                "text":"We currently have production software running in 4 Amazon regions (US West and East, Europe and Asia pacific). We are considering adding more regions (Central Europe being one), based on the traffic we observe on our landing pages."},
               {"name":"CloudFront", "pc":{"r":50,"t":45},
                "text":"This is our primary CDN provider."},
               {"name":"SNS & SQS", "pc":{"r":75,"t":22},
                "text":"We are using these messaging technologies heavily as part of our effort to decouple our different applications and services. Our usage of SNS and SQS is expected to grow as we evolve our architecture towards an event-driven and service-oriented architecture."},
               {"name":"VPC", "pc":{"r":150,"t":45},
                "text":"Moving to VPC is an important step in our effort to improve the security of our deployments and also to gain a better control of our networking topology, which will become essential as we’re moving towards an architecture with many distributed components."},
               {"name":"Lambda", "pc":{"r":250,"t":22},
                "text":"We have started to experiment with Lambda, mainly to react to changes in S3 buckets. If it becomes possible to subscribe to SQS queues, we expect our usage of it to increase, as it would allow us to roll out complex messaging topologies without the need to deploy complete applications."},
               {"name":"Multi-Cloud", "pc":{"r":250,"t":77},
                "text":"Currently, Amazon is our sole cloud provider. We are considering moving towards a multi-cloud deployment for our most critical infrastructure (page server) in order to guarantee the best possible uptime."}
               ]
},
{
    "quadrant": "Development",
    "left": w-200+30,
    "top" : 18,
    "color" : "#2d3e46",
    "items" : [
               {"name":"JavaScript", "pc":{"r":50,"t":135},
                "text":"Our page builder front-end is currently fully built in JavaScript. Our intention is to slowly move away from this language in favour of other options discussed below."},
               {"name":"CoffeeScript", "pc":{"r":150,"t":135},
                "text":"We are currently rewriting part of our front-end (script manager) in CoffeeScript, as a standalone application. This will allow us to untangle the front-end components from the back-end, currently provided by Ruby on Rails."},
               {"name":"Pure/ClojureScript", "pc":{"r":250,"t":135},
                "text":"In order to improve the quality of our front-end, we are investigating alternative languages like PureScript or ClojureScript, as an alternative to JavaScript. We expect that such languages will simplify the evolution of the front-end by increasing the guarantees of correctness and providing more powerful coding constructs."},
               {"name":"Rx", "pc":{"r":150,"t":155},
                "text":"We are adopting Rx both in the front-end and the back-end because it provides sane constructs for dealing with streams of events. On the front-end, these events are emitted by the browser. In the back-end, we expect more events coming from our applications, whether from SNS topics or websockets."},
               {"name":"Ruby", "pc":{"r":50,"t":110},
                "text":"Ruby is used in our main web application and in some ancillary services. We have different flavours of Ruby applications in production: a Rails monolith, plain Rack applications, most of them running on RMI and but some on jRuby. As we are scaling, our needs in terms of performance, event handling and background/asynchronous processing are increasing. Ruby is proving increasingly expensive to operate in such conditions, therefore our intention is to avoid building new applications on it and port the existing ones to the JVM."},
               {"name":"Clojure", "pc":{"r":125,"t":135},
                "text":"Our Ruby developers have identified Clojure as a potential “next” language. The functional orientation and immutability characteristics of the language are attractive enough to compensate the loss of object orientation, when coming from Ruby. Consequently, we have created Clojure wrappers on our common Java code to allow quickly bootstrap new applications that behave the same way than our other Java applications in term of bootstrap, configuration, monitoring, logging, etc… We have two important Clojure applications coming soon to production, and expect more to come."},
               {"name":"Java", "pc":{"r":50,"t":160},
                "text":"Java is in use in most of our background services, including page publishing and statistics. We have one application (our spam reputation engine) that has been built on Java 8. Our experience with Java 8 was pretty good, including a first foray into functional programming for some of our developers. But all in all Java’s overall value proposition compared to alternative JVM language remains weak, and therefore we are considering other options including Scala and Clojure."},
               {"name":"Scala", "pc":{"r":125,"t":150},
                "text":"We are currently building our SSL provisioning back-end in Scala/Akka and expect it to go full production soon. So far, Scala has been a good experience: we appreciate the guarantees of correctness we can get at compile time and the powerful asynchronous primitives that Akka provides. We expect Scala’s usage to expand in the near future."},
               {"name":"RAML", "pc":{"r":150,"t":110},
                "text":"We've selected RAML as our REST API specification language. RAML encourages contract-first API development and, to support it, provides a wide range of powerful constructs to describe all the different aspects of an API. The available tool suite is also growing, from code and documentation generators, to test time and run time validators. We've also selected JSON Schema as the specification language for the JSON entities consumed and produced by our resources."},
               {"name":"Netty", "pc":{"r":75,"t":135},
                "text":"We have rebuilt our page server around the Netty library and are very satisfied with its performance characteristics and coding model. Our intention is to use Netty-based libraries in any web service or application that requires high throughput or non-blocking IO semantics (for example, for handling websockets)."},
               {"name":"Hazelcast", "pc":{"r":75,"t":110},
                "text":"For our applications running on the JVM, Hazelcast provides an in-process set of distributed constructs, including distributed cache and publish-subscribe. We are leveraging these two features in production already and expect to see more of our application relying on them. The distributed publish-subscribe feature is useful when we do not need any kind of message persistence (in which case, we use SQS and SNS)."},
               {"name":"Vert.x 2", "pc":{"r":350,"t":135},
                "text":"Our primary interest in Vert.x was its support for polyglot development. Our ambition was to have our Ruby and Java developers build Vert.x modules that we would compose in large applications. I turned out that, despite tremendous efforts, polyglot development is a goal that is hard to reach. The main stumbling block was the crudity of the developers’ tools for Ruby developers. Though ruby-maven was a great help, developing Vert.x applications in Ruby was a very painful experience."}
               ]
},
{
    "quadrant": "Operations",
    "left" :45,
    "top" : (h/2 + 18),
    "color" : "#f6921e",
    "items" : [
               {"name":"", "pc":{"r":50,"t":225},
                "text":""},
               ]
},
{
    "quadrant": "Data",
    "left"  : (w-200+30),
    "top" :   (h/2 + 18),
    "color" : "#444444",
    "items" : [
               {"name":"", "pc":{"r":50,"t":315},
                "text":""},
               ]
}
];
