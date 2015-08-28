var radar_title = "August 2015";
var radar_sub_title = "technology radar";
var radar_page_title = "Unbounce Technology Radar | " + radar_title;
var radar_authors = [ "David Dossot", "Carl Schmidt", "Martin Suchanek", "Mike Thorpe" ];
var previous_radar = "feb_2015";

var radar_arcs = [
                  {'r':100,'name':'Using','f':'#fff'},
                  {'r':200,'name':'Adopting','f':'#ddd'},
                  {'r':300,'name':'Considering','f':'#bbb'},
                  {'r':400,'name':'Retiring','f':'#aaa'}
                 ];

var h = 900;
var w = 1200;

var radar_data = [
{
    "quadrant": "Cloud",
    "left" : 45,
    "top" : 18,
    "color" : "#0098db",
    "items" : [
               {"name":"EC2", "pc":{"r":25,"t":135},
                "text":"We currently have production software running in 4 Amazon regions (US West and East, Europe and Asia pacific). We are considering adding more regions (Central Europe being one), based on the traffic we observe on our landing pages."},
               {"name":"CloudFront", "pc":{"r":50,"t":135},
                "text":"This is our primary CDN provider."},
               {"name":"SNS & SQS", "pc":{"r":75,"t":112},
                "text":"We are using these messaging technologies heavily as part of our effort to decouple our different applications and services. Our usage of SNS and SQS is expected to grow as we evolve our architecture towards an event-driven and service-oriented architecture."},
               {"name":"VPC", "pc":{"r":75,"t":157},
                "text":"Moving to VPC is an important step in our effort to improve the security of our deployments and also to gain a better control of our networking topology, which will become essential as we’re moving towards an architecture with many distributed components."},
               {"name":"Lambda", "pc":{"r":150,"t":135},
                "text":"We have started to experiment with Lambda, mainly to react to changes in S3 buckets. If it becomes possible to subscribe to SQS queues, we expect our usage of it to increase, as it would allow us to roll out complex messaging topologies without the need to deploy complete applications."},
               {"name":"Multi-Cloud", "pc":{"r":250,"t":135},
                "text":"Currently, Amazon is our sole cloud provider. We are considering moving towards a multi-cloud deployment for our most critical infrastructure (page server) in order to guarantee the best possible uptime."}
               ]
},
{
    "quadrant": "Development",
    "left": w-200+30,
    "top" : 18,
    "color" : "#2d3e46",
    "items" : [
               {"name":"JavaScript", "pc":{"r":50,"t":45},
                "text":"Our page builder front-end is currently fully built in JavaScript. Our intention is to slowly move away from this language in favour of other options discussed below."},
               {"name":"Ruby", "pc":{"r":50,"t":20},
                "text":"Ruby is used in our main web application and in some ancillary services. We have different flavours of Ruby applications in production: a Rails monolith, plain Rack applications, most of them running on MRI and but some on jRuby. As we are scaling, our needs in terms of performance, event handling and background/asynchronous processing are increasing. Ruby is proving increasingly expensive to operate in such conditions, therefore our intention is to avoid building new applications on it and port the existing ones to the JVM."},
               {"name":"Java", "pc":{"r":50,"t":70},
                "text":"Java is in use in most of our background services, including page publishing and statistics. We have one application (our spam reputation engine) that has been built on Java 8. Our experience with Java 8 was pretty good, including a first foray into functional programming for some of our developers. But all in all Java’s overall value proposition compared to alternative JVM language remains weak, and therefore we are considering other options including Scala and Clojure."},
               {"name":"Netty", "pc":{"r":75,"t":45},
                "text":"We have rebuilt our page server around the Netty library and are very satisfied with its performance characteristics and coding model. Our intention is to use Netty-based libraries in any web service or application that requires high throughput or non-blocking IO semantics (for example, for handling websockets)."},
               {"name":"Hazelcast", "pc":{"r":75,"t":20},
                "text":"For our applications running on the JVM, Hazelcast provides an in-process set of distributed constructs, including distributed cache and publish-subscribe. We are leveraging these two features in production already and expect to see more of our application relying on them. The distributed publish-subscribe feature is useful when we do not need any kind of message persistence (in which case, we use SQS and SNS)."},
               {"name":"Clojure", "pc":{"r":75,"t":70},
                "text":"We have adopted Clojure as our next-gen language, based on the consensus around it from our Ruby and JVM developers. The functional orientation and immutability characteristics of the language are attractive enough to compensate the loss of object orientation. Consequently, we have created Clojure wrappers on our common Java code to allow quickly bootstrap new applications that behave the same way than our other Java applications in term of bootstrap, configuration, monitoring, logging, etc... Our new API Router and Events Gateway applications have been built in Clojure and are now in production. Our new Leads Integration platform is currently being built in Clojure."},
               {"name":"Rx", "pc":{"r":150,"t":65},
                "text":"We are adopting Rx both in the front-end and the back-end because it provides sane constructs for dealing with streams of events. On the front-end, these events are emitted by the browser. In the back-end, we expect more events coming from our applications, whether from SNS topics or websockets."},
               {"name":"Scala", "pc":{"r":125,"t":60},
                "text":"We've built our SSL provisioning microservice in Scala/Akka. So far, Scala has been a good experience: we appreciate the guarantees of correctness we can get at compile time and the powerful asynchronous primitives that Akka provides. This said we are mainly focused on Clojure as our next-gen language so it's possible this Scala project remains a one-off."},
               {"name":"RAML", "pc":{"r":150,"t":20},
                "text":"We've selected RAML as our REST API specification language. RAML encourages contract-first API development and, to support it, provides a wide range of powerful constructs to describe all the different aspects of an API. The available tool suite is also growing, from code and documentation generators, to test time and run time validators. We've also selected JSON Schema as the specification language for the JSON entities consumed and produced by our resources."},
               {"name":"CoffeeScript", "pc":{"r":150,"t":45},
                "text":"We are currently rewriting part of our front-end (script manager) in CoffeeScript, as a standalone application. This will allow us to untangle the front-end components from the back-end, currently provided by Ruby on Rails."},
               {"name":"Pure/ClojureScript", "pc":{"r":250,"t":45},
                "text":"In order to improve the quality of our front-end, we are investigating alternative languages like PureScript or ClojureScript, as an alternative to JavaScript. We expect that such languages will simplify the evolution of the front-end by increasing the guarantees of correctness and providing more powerful coding constructs."},
               {"name":"Vert.x", "pc":{"r":350,"t":45},
                "text":"Our primary interest in Vert.x was its support for polyglot development. Our ambition was to have our Ruby and Java developers build Vert.x modules that we would compose in large applications. I turned out that, despite tremendous efforts, polyglot development is a goal that is hard to reach. The main stumbling block was the crudity of the developers’ tools for Ruby developers. Though ruby-maven was a great help, developing Vert.x applications in Ruby was a very painful experience."}
               ]
},
{
    "quadrant": "Operations",
    "left" :45,
    "top" : (h/2 + 18),
    "color" : "#f6921e",
    "items" : [
               {"name":"Scout", "pc":{"r":50,"t":225},
                "text":"Scout is our primary monitoring and alerting tool. We use it for monitoring servers, SQS queues and application specific parameters."},
               {"name":"NewRelic", "pc":{"r":50,"t":250},
                "text":"We use NewRelic to complement Scout with deep application performance and issues analysis."},
               {"name":"Ansible", "pc":{"r":75,"t":225},
                "text":"Ansible provides a way to provision our server images and test locally in a more straight forward and reliable way than Chef. We plan on using it to create immutable server images with Packer."},
               {"name":"Packer", "pc":{"r":75,"t":200},
                "text":"Packer gives us a consistent method for creating and provision server images (along with Asible) that can be used by many virtualization tools (AWS, VMWare, VirtualBox, Vagrant, etc..)."},
               {"name":"CloudFormation", "pc":{"r":75,"t":250},
                "text":"We are using CloudFormation (and Troposphere) to automate the creation, configuration and deployment of our cloud infrastructure and software. We don’t have a 100% adoption on all our products yet but several critical production systems are already using it."},
               {"name":"SumoLogic", "pc":{"r":150,"t":225},
                "text":"SumoLogic is a very promising alternative to our self-hosted ElasticSearch. It provides a wide range of consumers (including straight-in SNS) and an excellent web UI. We are using it to aggregate all application logs, including page server access logs. We are expanding its use for monitoring events that are broadcast to SNS. It is a supporting actor of our architecture evolution towards distributed lowly-coupled services."},
               {"name":"Terraform", "pc":{"r":250,"t":200},
                "text":"Terraform is a tool to manage and create infrastructure as code. We would like to investigate using it as a tool to manage our AWS infrastructure components through CloudFormation. "},
               {"name":"Docker", "pc":{"r":250,"t":216},
                "text":"We are currently experimenting with Docker as tool for allowing developers to easily run applications and services on their machines, which traditionally implied having to install Ruby, Rake, Java, Maven, ... and deal with the particularities of each project. We still have to investigate using Docker for production deployments."},
               {"name":"Consul", "pc":{"r":250,"t":234},
                "text":"We are planning to investigate Consul as a potential platform for configuration and cluster management. We're also considering it for our service registry."},
               {"name":"Prometheus", "pc":{"r":250,"t":250},
                "text":"Prometheus is a systems and service monitoring tool. It collects metrics from configured targets at given intervals, evaluates rule expressions, displays the results, and can trigger alerts if some condition is observed to be true. We are considering using it to replace Scout as our server monitoring tool.  Also, it makes really pretty graphs."},
               {"name":"Chef", "pc":{"r":350,"t":216},
                "text":"After significantly investing in Chef, we’ve decided that this tool wasn’t the best for supporting our needs in term of cloud deployment. As we move to immutable instances Chef’s centralized server and long lived instance model no longer matches our needs."},
               {"name":"ElasticSearch", "pc":{"r":350,"t":234},
                "text":"We are retiring our deployment of ElasticSearch in favour of SumoLogic. After running it in production for almost a year, we’ve reached the point where the amount of pain we get from operating it surpasses its benefits. We were only using it to aggregate the access logs from our page servers."}
               ]
},
{
    "quadrant": "Data",
    "left"  : (w-200+30),
    "top" :   (h/2 + 18),
    "color" : "#444444",
    "items" : [
               {"name":"AWS S3", "pc":{"r":50,"t":305},
                "text":"S3 is our main storage for published page contents. As such, it’s been proven stable and solid, although we had, at times, experienced degraded performances. We’re considering using multiple S3 regions to try to mitigate this situation."},
               {"name":"MySQL (Percona)", "pc":{"r":50,"t":330},
                "text":"Our main web application uses MySQL Percona as its persistent datastore. We use a master-slave deployment across two Amazon regions. We expect that the large datasets we currently store in MySQL will move to a more scalable NoSQL datastore."},
               {"name":"AWS Dynamo", "pc":{"r":75,"t":285},
                "text":"We’ve started to use Dynamo as an alternative data store for applications that have a simple data model, do not need the relational aspect of an RDBMS and need very fast data access. We use it mainly for workflow state persistence and front-end version lookups."},
               {"name":"AWS ElastiCache", "pc":{"r":75,"t":340},
                "text":"Used for Memcached and Redis, which we respectively use for the caching needs of our Rails monolithic application and the persistence needs of Sidekiq. As we’re moving away from these technologies, we are not expecting our usage of ElastiCache to increase."},
               {"name":"Mode Analytics", "pc":{"r":75,"t":315},
                "text":"Mode is a platform for data analysis and collaboration. It sits on top of our MySQL and Redshift based data warehouse, and allows our analysts to create and share SQL based queries and analyses. We also use Mode to share reports, charts, metrics, KPIs, and alerts with everyone in the company."},
               {"name":"AWS Redshift", "pc":{"r":150,"t":285},
                "text":"Redshift is a hosted distributed relational DB store, optimized for OLAP workloads. We are adopting it to store all our event data, and hooking it up to existing SQL based BI analytics tools."},
               {"name":"Apache Spark", "pc":{"r":150,"t":315},
                "text":"Spark is a big data cluster computing engine. We are adopting it in our analytics pipelines for batch ETL workloads and near-real time stream processing."},
               {"name":"Apache Cassandra", "pc":{"r":250,"t":285},
                "text":"We are considering Cassandra as a potential datastore for our huge corpus of statistical data."},
               {"name":"AWS Aurora", "pc":{"r":250,"t":305},
                "text":"Currently in preview, this recently introduced MySQL-compatible database from Amazon looks very promising. We're interested by the level of management provided and pricing, which would make Aurora a compelling replacement for our MySQL servers."},
               {"name":"AWS Kinesis", "pc":{"r":250,"t":325},
                "text":"Kinesis is basically hosted and managed Kafka: a high-throughput, distributed, short term (24 hour) durable pub-sub queue. It is under evaluation for our analytics pipelines, which consume and compute on batch and micro batch intervals."},
               {"name":"Sense.io", "pc":{"r":250,"t":345},
                "text":"Sense.io is a unified cloud data platform. We use it to deploy, run, and scale our SQL and Spark based data workflows and ETL pipelines. We also use it to store, run, and share our IPython and R based data analyses."}
               ]
}
];
