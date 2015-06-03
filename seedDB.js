'use strict';

// Set Environment
process.env.NODE_ENV = 'production';

/**
 * Module dependencies.
 */
var	config = require('./config/config'),
	seeder = require('mongoose-seed');

// Initialize Mongoose
seeder.connect(config.db, function() {
	
	seeder.loadModels(config.files.server.models);
	seeder.clearModels(['Campaign', 'User'], function() {
		seeder.populateModels(data);
	});
});

var data = [
	{ 
		'model': 'Campaign',
		'documents': [
			{
				'title': 'Tiggy the Tigerator',
				'subtitle': 'Bringing beer to the masses',
				'img': 'tiggy.png',
				'body': 'Help us raise capital to enhance Tiggy for Reunions 2016!',
				'offers': ['556e4eb2f36fed4c7ec6110f']
			},
			{
				'title': 'Cheers for Charlie',
				'subtitle': 'Cochlear implants for our newborn',
				'img': 'charlie.png',
				'body': 'After months of thought and research we have decided to move forward with cochlear implants. While insurance is a great help in the surgery, it does not cover the entire cost, nor the accessories. The accessories are the key to the most advanced technology that will allow our baby to hear.  Charlie\'s ability to hear is an extremely important part of his brain development, especially speech development. With these implants, he has the possibility of hearing and speaking to a near normal ability. Our boy has fought so hard for us, the least we can do is this for him. Thank you so much for your prayers, love, kindness and generosity.'
			},
			{
				'title': 'Light Up Faraday',
				'subtitle': 'Learn by Making',
				'img': 'faraday.png',
				'body': 'We launched our first product to teach kids about electronics. Since then, we’ve shipped thousands of LightUp kits to eager kids around the world (90+ countries and counting).  We\'re taking cutting-edge wireless technology in putting into a toy. To do that in a cost-effective way, we need to hit certain minimum quantities. With your help we can overcome the minimum order hurdle, set up our production line, and start churning out awesome Faraday Kits to send to each of you. In return, our Kickstarter backers will be the first people in the world to receive the Faraday Kit, and at a special price!'
			},
			{
				'title': 'Disney Princess Half Marathon',
				'subtitle': 'Walking for Lymphoma and Leukemia',
				'img': 'disney.png',
				'body': 'I am WALKING in a Disney Princess half marathon on February 23rd, 2014 as a fundraiser for the Lymphoma and Leukemia Society. My niece Erin had lymphoma, was in remission, and this past summer has been diagnosed with leukemia. Many members of "Erin"s Royal Family" are participating, and we will be in princess attire all along the route! (I will probably be Fiona from Shrek).  My goal is to walk at least a 16 min/mile pace so I can beat the van that threatens humiliation if you are too slow (they pick you up).'
			},
			{
				'title': 'Drifting June',
				'subtitle': 'A highly interpersonal, unexpected web series',
				'img': 'june.png',
				'body': 'Drifting June is a "webseries"... but what is a "webseries"?  Is it just one thing?  We believe anything can be more than a monolith.  For example: plurals.  Thus, Drifting June.  It\'s not only the reimagining of a highly interpersonal, unexpected web series.  Part performance piece, part storytelling tutorial, Drifting June is a truthful, immersive webxperience set in present day Brooklyn, New York. Drifting June takes what we think we know, turns it on its head, and then turns it rightside back up like it was before, and asks how that was for it.  And in that unsettlement comes a kind of new knowing.'
			},
			{
				'title': 'Hemp Building at Idaho Base Camp',
				'subtitle': 'Truly sustainable solutions',
				'img': 'hemp.png',
				'body': 'Hempitecture is designing & building the first non-residential Hemp building in the US as a Movement Studio outside Sun Valley, Idaho.'
			}
		]
	}
];	


/*
	{
		'model': 'Sponsor',
		'documents': [
			{
				'name': 'The Hidden Genius Project'
			}
		]
	}

	{
		'model': 'Offer',
		'documents': [
			{
				'name': 'Survey',
				'sponsor': '556e4ce49be656f07dcbf3ba',
				'karma': 5
			}
		]
	}
*/


