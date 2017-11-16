/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/

'use strict';
const Alexa = require('alexa-sdk');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = "Serbia Facts";
const GET_FACT_MESSAGE = "Here's your fact: ";
const HELP_MESSAGE = "You can say tell me a Serbia fact, or, you can say exit... What can I help you with?";
const HELP_REPROMPT = "What can I help you with?";
const STOP_MESSAGE = "Goodbye!";

const data = [
    "Did you know that Serbia is the place of the highest number of Roman emperors born in one country? Yes, 18 Roman rulers were born in this country and it accounts for a fifth of all Roman emperors.",
    "Most villages in the world are made of houses and other structures built on different types of material. But in Serbia, there is a village located in Mt. Stara Planina that is made entirely out of stone. This village, known as Gostuša has all of its houses and other structures made out of mud, stone and natural materials and no other material. You would think that because these materials are weak compared to other modern building materials that the houses would have collapsed due to age but you are wrong. These houses are still very strong and structurally sound that people still live in them today.",
    "The tallest stone gates in Europe are located in Serbia. These gates, which are three in number, are called the Little Prerast, the Big Prerast, and the Dry Prerast. Contrary to what the names might suggest, Little Prerast is the biggest among the three. It measures 34 meters in height, 30 meters in length, and 15 meters in width.",
    "Serbia has its own Grand Canyon. The Temštice river canyon is a canyon in Serbia that strikingly resembles the Grand Canyon of the Colorado because of its red cliffs.",
    "The first vampire in the world who was also extensively written about in the Austrian press in 1725 was Petar Blagojević. In fact, the word vampire was derived from the Serbian word, Vampir. The only Serbian word that is accepted and used across the world is “vampire”.",
    "We all know that the first video transmission between North America and Europe was done in 1963 because of the launch of the first telecommunications satellite. But what most people do not know is that the video featured a fresco from the Mileševa monastery in Serbia known as the White Angel. So you can safely say that Serbia took part in the breakthrough that was intercontinental telecommunication.",
    "Serbians too played a major role in the first moon landing. Though they might not have contributed financially, their’s was a contribution of manpower. Three Serbians took part in that project, which was known as Apollo. Also, a Serbian named Mihajlo Pupin is among the founders of National Advisory Committee for Aeronautics on 3 March 1915, which later became NASA.",
    "We all know that islands do not float but reach deep into the earth’s crust just like any other landform. But in Serbia, there are two lakes named Vlasina and Semeteš where islands float on the lakes’ surfaces.",
    "There are globes in Serbia that are filled with mystery. Firstly, nobody can tell for certain the origin of these globes named the Povlen globes. Scientists say that they originated from volcanic activity, while others claim that they were created by aliens. There are also those who claim that these globes posses healing and miraculous powers.",
    "For 500 years Serbia was ruled by the Ottoman Empire (Turks).",
    "Belgrade, the capital of Serbia, has been ranked the highest among party places in the world by Lonely Planet.",
    "The Serbian clock-making industry is even older than the world-famous Swiss one. The Serbs had their own clock 600 years before the Swiss did.",
    "Serbian language was one of the four official languages in Ottoman Empire. Not only this, but Serbia gave several notable Great Veziers and dozens of generals to the Ottomans. On the other hand, Serbian dukes in Austria and Russia were known as the greatest enemies of Ottoman Empire. Thanks to this, it was quite usual to have battles between two Serbian generals on different sides.",
    "A fifth of all Roman rulers were born in Serbia between the 3rd and 4th centuries. 18 Roman emperors were born on the land which is today Serbia. This is about 20% of all the Roman emperors. The most famous of them was definetely Constantine the Great, Roman emperor who declared Christianity as official religion. Not only that, but Serbia is a home of one of 4 Roman capitals – ancient city of Sirmium, today’s Sremska Mitrovica.",
    "Ivo Andric is the only Nobel Prize winner from Serbia. He won the esteemed award for literature in 1961.",
    "Another famous person from Serbia from the field of sports is Novak Djokovic. He is a professional tennis player who holds the number-one ATP ranking at the time of this writing. He has won 12 Grand Slam singles titles to this day. ",
    "Do you love raspberries? Serbia is the largest exporter of raspberries in the world. It contributes 30% of all raspberries to the international market.",
    "According to statistics, Serbians are known to be the most hospitable people in the world. They believe that they won’t gain any favor from the gods if they are not hospitable to their guests.",
    "Serbia is the largest exporter of raspberry in the world – almost 95% of raspberries sold in the world originate from Serbia. Not only that, but Serbia used to be the largest exporter of plums and prunes; and its potential is coming back to life in the past several years. It is estimated that by 2017 Serbia will be the leader in plum, apple and pear export in Europe.",
    "Serbia has many impressive natural attractions such as the Prerasts of Vratna, Europe’s tallest stone gates. There are 3 of them – the Dry Prerast, the Big Prerast and the Little Prerast which, being 34 metres high, 30 metres long, and 15 metres wide, is actually the tallest one.",
    "Apart from Nikola Tesla, who is certainly one of the most important inventors in history, Mihajlo I. Pupin (physicist and physical chemist), Milutin Milanković (mathematician, astronomer, climatologist, geophysicist, civil engineer), Mileva Marić (physicist) and Vuk Stefanović Karadžić (philologist and linguist) are some of the other renowned scientists from Serbia.",
    "13 Serbs worked on the NASA’s Apolo project. Also, one of the founders of the National Aeronautics and Space Administration agency was a Serb named Mihajlo Pupin.",
    " The Church of Saint Sava is the not only the largest Serbian Orthodox church, it is the largest Orthodox place of worship in the Balkans and one of the largest Orthodox churches in the world.",
    "Belgrade, the capital of Serbia, is one of the largest cities in Southeast Europe.",
    "Serbia formed a union with Montenegro in 1992, and split up again in 2006 to become independent.",
    "It is ranked 66th in the world on the Human Development Index.",
    "The name “Serbia” comes from the Greek language, meaning “land of the Serbs.”",
    "Serbia has five national parks: Đerdap, Fruška Gora, Kopaonik, Šar-planina and Tara.",
    "Serbia is slightly smaller than South Carolina in the area.",
    "It has a total land boundary of 2,322 kilometers and no coastline, as it is a landlocked country.",
    "The lowest point, 35 m, is at the Danube and Timok Rivers, and the highest point is Midzor at 2,169 m.",
    "Serbia’s agricultural land area is approximately 58%, while forests cover 31.6% of its total land area."
]

//=========================================================================================================================================
//Editing anything below this line might break your skill.
//=========================================================================================================================================

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
        this.emit('GetNewFactIntent');
    },
    'GetNewFactIntent': function () {
        const serbiaFacts = data;
        const factIndex = Math.round(Math.random() * serbiaFacts.length);
        const randomFact = serbiaFacts[factIndex];
        const speechOutput = GET_FACT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput);
        this.emit(':responseReady');
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};
