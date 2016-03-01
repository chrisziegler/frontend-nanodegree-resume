

var bio = {

  "name": "Chris Ziegler",
  "contacts": {
    "mobile": "206-321-0153",
    "e-mail": "chris.ziegler@gmail.com",
    "github": "github.com/chrisziegler",
    "location": "Pullman, WA"
  },
  "age": 49,
  "skills": ["awesomness", "programming", "design", "front-end development"],
  "bioPic": "images/fry.jpg"
};


// use both bracket and dot notation to add key/value pairs to object
var education = {
	"schools": [
    {
		"name": "Washington State University",
		"location": "Pullman, WA",
    "majors": ["General Studies"],
    "minors": ["Business", "Fine Arts"],
		"degree": "BA Humanities",
		"year": "1986 - 1992"
	}, {
		"name": "Washington State University",
		"location": "Pullman, WA",
    "majors": ["Environmental Science"],
		"degree": "BS Earth and Environmental Science",
		"year": "2012 - 2014"
	}
  ]
};

var work = {
  "jobs": [
    {
	"employer": "Washington State University",
	"title": "Research Assistant II",
	"dates": "May 1 - Aug 31st, 2014",
  "location": "Pullman, WA",
	"description": "Assisted on this graduate research study under the \
	 guidance of Dr. Ben Zamora.Worked on location in the Kramer Prairie – one of the last \
	 remaining native Palouse Prairie ecosystems.Study compared the efficacy of herbicides \
	 (glyphosate and the broadleaf herbicide, 2, 4 - D), vs prescribed burns, \
   and other biological controls– primary of interest was the Eustenopus villosus, \
	 or hairy weevil, as a natural control for yellowstar thistle propagation and prairie \
   restoration.Prepared plots of Idaho fescue and bluebunch wheatgrass, and recorded periodic \
   measurements on these test sites with various sensors, including: temperature, wind speed, \
   soil moisture readings, transect sampling, weevil counts, solar radiation, and ground \
   coverage plant inventories."
}, {
  "employer": "U.S. Census Bureau",
  "title": "Enumerator",
  "dates": "May - Sept. 2010",
  "location": "Pullman, WA",
  "description": "Worked numerous operations -  NRFU, VDC, & Field Verification – as a field \
   operator for the 2010 Decennial Census. Mapping and Census Block corrections. Accurately \
   conduct interviews and compiled data over large territory, while working independently of \
   Spokane's Regional Office. Retained beyond initial census enumeration to act as a quality control \
   field operative for all counties south of Spokane in Eastern."
}, {
  "employer": "Coldwell Banker Tomlinson",
  "title": "Realtor",
  "dates": "2007 -2010",
  "location": "Pullman, WA",
}, {
  "employer": "Prudential Northwest Realty",
  "title": "Realtor",
  "dates": "2002 - 2007",
  "location": "Seattle, WA",
  "description": "High volume sales as an agent for clients through dramatically changing market \
   conditions, and territories. Prepared legal documents such as representation agreements, \
   purchase and sale contracts, and addendum clauses altering and, updating contracts. \
   Understanding and upholding real estate law regarding fiduciary duties to the principle. Achieved \
   and maintained licensing through adherence to NWMLS standards and continuing education. \
   Extensive use and refinement of written and oral communication skills involved with directing \
   complicated negotiations. Coordinated project timelines along a critical path with mortgage \
   brokers, home inspectors, appraisers, title, and escrow companies. Maintained multiyear \
   partnership with BECU, providing real estate buying and selling representation for Boeing \
   employees Continued work as a freelance consultant and web developer during this period doing \
   technology presentations, web design and development, ad placement and, SEO."
},  {
  "employer": "marchFIRST",
  "title": "Web Producer",
  "dates": "2000 - 2001",
  "location": "Kirkland, WA",
  "description": "Coordinated the creative front-end web development team including: \
   information architects, designers, writers, site builders and beta testers to produce e-commerce \
   solutions and multimedia presentations. Produced and contributed to Requirements Definition \
   and Functional Specs for a broad array of clients projects. Multiple platform experience on \
   Windows/Mac, Microsoft Office and Adobe Creative Suite software. Gained international travel \
   and business experience working with clients in Europe."
},  {
  "employer": "USWeb/CKS",
  "title": "Graphic Designer/Site Builder",
  "dates": "1997 - 2000",
  "location": "Seattle, WA",
  "description": "Created proof-of-concepts, design prototypes, banner ads  \
   and built prototypes, presentations, and websites using tools such as Photoshop, Illustrator, \
   Dreamweaver MS Project, and Powerpoint."
   }
 ]
 };


var projects =
 {
 	"projects": [{
 			"title": "Boeing: EELV",
 			"dates": "1999-2000",
 			"description": "Worked at the McConnel Douglas Plant in Hunnington Beach, California  \
       on the design and code of this Intraweb application for Boeing's EELV rocket project",
 			"images": ["images/boeing.jpg"]
 		}, {
 			"title": "Eyes to the World",
 			"dates": "2001",
 			"description": "Proof of concept, and design comps for this Seattle-based startup",
 			"images": ["images/eyes.JPG", "images/eyes2.jpg"]
 		}
 	]
 };


// Another string function to format international version of name
 function inName(name)  {
    name = name.trim().split(" "); // The trim() method removes whitespace from both sides of a string.
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() +
      name[0].slice(1).toLowerCase();


    return name[0] +" "+ name[1];

 };

 // console.log(inName(" JoE DiMaggiO"));

$("#main").append(internationalizeButton);

//Display google map in the 'Where i've lived and worked' section
$("#mapDiv").append(googleMap);


// add a projects section - showing that objects can encapsulate (hold inside) Functions
(projects.display = function()  { // creates a display method to the projects object

  for(project in projects.projects)  {
    $('#projects').append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
    $('.project-entry:last').append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
    $('.project-entry:last').append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
    $('.project-entry:last').append(formattedDescription);

    if(projects.projects[project].images.length > 0) {
      for(image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
        $('.project-entry:last').append(formattedImage);
      }
    }

  }

})();




 var formattedPic = HTMLbioPic.replace('%data%', bio.bioPic);
 $("#header").append(formattedPic);


 var headName = 'Chris Ziegler  ';
 var role = '   Web Developer';

 var formattedName = HTMLheaderName.replace('%data%', headName);
 var formattedRole = HTMLheaderRole.replace('%data%', role);

 $('#header').prepend(formattedRole);
 $('#header').prepend(formattedName);

 // $("#topContacts").append(HTMLemail);
 var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
 var formattedEmail = HTMLemail.replace('%data%', bio.contacts["e-mail"]);
 var formattedGitHub = HTMLgithub.replace('%data%', bio.contacts.github);
 $("#topContacts").append(formattedMobile);
 $("#topContacts").append(formattedEmail);
 $("#topContacts").append(formattedGitHub);

// function iterates through jobs data (or whatever work object you feed it)
// logs various locations listed in resume
function locationizer(work_obj)  {
   var locArray = [];
   for(loc in work_obj.jobs)  {

     var newLocation = work_obj.jobs[loc].location;
    locArray.push(newLocation);
    }
  return locArray;

};

// console.log(locationizer(work));


// while loop, final } (right bracket) after lower comment block)
if(bio.skills.length > 0)  {
  $("#header").append(HTMLskillsStart);
  var skillsLength = bio.skills.length;
  var i = 0;
    while(i < skillsLength) {
      var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
      $('#skills').append(formattedSkill);
      i++;
    }
};

function displayWork()  {
  for(job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);  // select by id the html element to add helper formatted html string
    // append within that string (which is just a <div>), by appending inside th div another string and replacing %data  with actual employer data from jobs object
    var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
    var formattedTitle =  HTMLworkTitle.replace('%data%', work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle; // concat Employer and Title HTML strings
    // add to helper entry w/class .work-entry (HTMLworkStart string that has already been appended to index.html)
    // following (appending) proceeding entry which has already been added to the DOM (:last)
    // just a way of selectively traversing the DOM
    $(".work-entry:last").append(formattedEmployerTitle);
    //It's HTMLworkStart that has the class .work-entry, Dates, Descriptions and everyhting that gets appended to
    // this $selected class gets added last (but before the closing <div>) in order of code executing, then
    // the for-in-loop iterates again, and the next job appears in order

     var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
     $(".work-entry:last").append(formattedDates);

     var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
     $(".work-entry:last").append(formattedDescription);

  }
};
displayWork();


function displaySchool()  {
  for(school in education.schools)  {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace('%data%', education.schools[school].name);
    var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
    var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[school].majors);
    var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
    var formattedYear = HTMLschoolDates.replace('%data%', education.schools[school].year);

    $(".education-entry:last").append(formattedName);
    $(".education-entry:last").append(formattedLocation);
    $(".education-entry:last").append(formattedMajor);
    $(".education-entry:last").append(formattedDegree);
    $(".education-entry:last").append(formattedYear);


// add in if .enght > 0 statement   var formattedMinor = (also add HTMLschoolMinor is helper.js)

  }
}
displaySchool();
