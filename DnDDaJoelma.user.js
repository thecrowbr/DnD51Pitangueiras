// ==UserScript==
// @name     DnD da Joelma
// @version      1.5
// @description  Enhance your Roll20 sound experience
// @author       TheCrow
// @include  https://app.roll20.net/editor/
// @grant        unsafeWindow
// ==/UserScript==
/* eslint-disable no-multi-spaces */

var vol = 0.8;

//-- Set the watched terms using the awesome power of regex.
var StartPoint = /[Cc]ommands/i;
var StartOk = false;

var playSFX = false;
var alrt = new Audio ();

//var CritFail = /fullfail|critfail|fullcrit|critsuccess/i;
var Fail = false;

//////////////////////////////////////////////////////////// WEAPON SOUNDS ////////////////////////////////////////////////////////////

var Axe = /[Hh]alberd|[Aa]xe|[Gg]reataxe/i;
//https://freesound.org/people/thecrow_br/sounds/574038/
var alrtAxe = new Audio ("https://freesound.org/data/previews/574/574038_12965133-lq.mp3");

var Sword = /[Ss]word|[Ss]hortsword|[Ll]ongsword|[Gg]reatsword|[Rr]apier|[Ff]lamatarra|[Ss]cimitar|[Dd]agger/i;
//https://freesound.org/people/thecrow_br/sounds/574043/
var alrtSword = new Audio ("https://freesound.org/data/previews/574/574043_12965133-lq.mp3");

var Hammer = /[Mm]ace|[Mm]orningstar|[Hh]ammer|[Ww]arhammer/i;
//https://freesound.org/people/Hybrid_V/sounds/319590/
var alrtHammer = new Audio ("https://freesound.org/data/previews/319/319590_5436764-lq.mp3");

var Arrow = /[Bb]ow|[Ss]hortbow|[Cc]rossbow|[Ll]ongbow|[Jj]avelin|[Dd]art/i;
//https://freesound.org/people/thecrow_br/sounds/574044/
var alrtArrow = new Audio ("https://freesound.org/data/previews/574/574044_12965133-lq.mp3");

var Staff = /[Ss]taff|[Qq]uarterstaff /i;
//https://freesound.org/people/thecrow_br/sounds/574444/
var alrtStaff = new Audio ("https://freesound.org/data/previews/574/574444_12965133-lq.mp3");

var Club = /[Cc]lub/i;
//https://freesound.org/people/thecrow_br/sounds/577354/
var alrtClub = new Audio ("https://freesound.org/data/previews/577/577354_12965133-lq.mp3");

var Punch = /[Pp]unch|[Uu]narmed [Ss]trike/i;
//https://freesound.org/people/thecrow_br/sounds/578169/
var alrtPunch = new Audio ("https://freesound.org/data/previews/578/578169_12965133-lq.mp3");

var Whip = /[Ww]hip/i;
//https://freesound.org/people/thecrow_br/sounds/578179/
var alrtWhip = new Audio ("https://freesound.org/data/previews/578/578179_12965133-lq.mp3");

var Bite = /[Bb]ite/i;
//https://freesound.org/people/thecrow_br/sounds/578182/
var alrtBite = new Audio ("https://freesound.org/data/previews/578/578182_12965133-lq.mp3");

var Shock = /[Ss]hock|[Ss]torm [Bb]oomerang/i;
//https://freesound.org/people/thecrow_br/sounds/578176/
var alrtShock = new Audio ("https://freesound.org/data/previews/578/578176_12965133-lq.mp3");

//////////////////////////////////////////////////////////// SPELL SOUNDS ////////////////////////////////////////////////////////////

var Thunder = /[Tt]hunderwave|[Tt]hunder/i;
//https://freesound.org/people/thecrow_br/sounds/578174/
var alrtThunder = new Audio ("https://freesound.org/data/previews/578/578174_12965133-lq.mp3");

var Firebolt = /[[Ff]irebolt|[Pp]roduce [Ff]lame|[Ss]acred [Ff]lame|[Ff]laming [Ss]phere/i;
//https://freesound.org/people/thecrow_br/sounds/578160/
var alrtFirebolt = new Audio ("https://freesound.org/data/previews/578/578160_12965133-lq.mp3");

var Fireball = /[Ff]ireball/i;
//https://freesound.org/people/thecrow_br/sounds/578161/
var alrtFireball = new Audio ("https://freesound.org/data/previews/578/578161_12965133-lq.mp3");

var Heal = /[Hh]eal|[Cc]ure [Ww]ounds|[Ss]econd [Ww]ind/i;
//https://freesound.org/people/thecrow_br/sounds/578158/
var alrtHeal = new Audio ("https://freesound.org/data/previews/578/578158_12965133-lq.mp3");

var Wololo = /[Ww]ololo/i;
//https://freesound.org/people/thecrow_br/sounds/578178/
var alrtWololo = new Audio ("https://freesound.org/data/previews/578/578178_12965133-lq.mp3");

var MagicMissiles = /[Mm]agic [Mm]issiles/i;
//https://freesound.org/people/thecrow_br/sounds/578167/
var alrtMagicMissiles = new Audio ("https://freesound.org/data/previews/578/578167_12965133-lq.mp3");

var MagicShock = /[Mm]agic [Ss]hock/i;
//https://freesound.org/people/thecrow_br/sounds/578166/
var alrtMagicShock = new Audio ("https://freesound.org/data/previews/578/578166_12965133-lq.mp3");

var Invisibility = /[Ii]nvisibility|[Ii]nvisible/i;
//https://freesound.org/people/thecrow_br/sounds/578163/
var alrtInvisibility = new Audio ("https://freesound.org/data/previews/578/578163_12965133-lq.mp3");

var RayOfFrost = /[Rr]ay [Oo]f [Ff]rost/i;
//https://freesound.org/people/thecrow_br/sounds/578173/
var alrtRayOfFrost = new Audio ("https://freesound.org/data/previews/578/578173_12965133-lq.mp3");

//////////////////////////////////////////////////////////// SOUND EFFECTS ////////////////////////////////////////////////////////////

var Rage = /[Rr]age/i;
//https://freesound.org/people/thecrow_br/sounds/578168/
var alrtRage = new Audio ("https://freesound.org/data/previews/578/578168_12965133-lq.mp3");

var Hands = /[Ss]leight [Oo]f [Hh]and/i;
//https://freesound.org/people/thecrow_br/sounds/578159/
var alrtHands = new Audio ("https://freesound.org/data/previews/578/578159_12965133-lq.mp3");

var Fall = /[Ff]all/i;
//https://freesound.org/people/NeoSpica/sounds/504617/
var alrtFall = new Audio ("https://freesound.org/data/previews/504/504617_7704891-lq.mp3");

var Wilhelm = /[Ww]ilhelm/i;
//https://freesound.org/people/SweetNeo85/sounds/13797/
var alrtWilhelm = new Audio ("https://freesound.org/data/previews/13/13797_40835-lq.mp3");

var Run = /[Rr]un|[Rr]unning/i;
//https://freesound.org/people/thecrow_br/sounds/578177/
var alrtRun = new Audio ("https://freesound.org/data/previews/578/578177_12965133-lq.mp3");

var Flute = /[Ff]lute/i;
//https://freesound.org/people/thecrow_br/sounds/578162/
var alrtFlute = new Audio ("https://freesound.org/data/previews/578/578162_12965133-lq.mp3");
//https://freesound.org/people/thecrow_br/sounds/578180/
var alrtFluteFail = new Audio ("https://freesound.org/data/previews/578/578180_12965133-lq.mp3");

var FF7 = /[Ff][Ff]7|[Vv]ictory/i;
//https://freesound.org/people/thecrow_br/sounds/578155/
var alrtFF7 = new Audio ("https://freesound.org/data/previews/578/578155_12965133-lq.mp3");

var Round1 = /[Rr]ound|[Ff]ight/i;
//https://freesound.org/people/thecrow_br/sounds/578172/
var alrtRound1 = new Audio ("https://freesound.org/data/previews/578/578172_12965133-lq.mp3");

var NaoConsegue = /[Nn]ao [Cc]onsegue|[Mm]oises/i;
//https://freesound.org/people/thecrow_br/sounds/578165/
var alrtNaoConsegue = new Audio ("https://freesound.org/data/previews/578/578165_12965133-lq.mp3");

var Errou = /[Ee]rrou/i;
//https://freesound.org/people/thecrow_br/sounds/578156/
var alrtErrou = new Audio ("https://freesound.org/data/previews/578/578156_12965133-lq.mp3");

var PegandoFogo = /[Pp]egando [Ff]ogo/i;
//https://freesound.org/people/thecrow_br/sounds/578171/
var alrtPegandoFogo = new Audio ("https://freesound.org/data/previews/578/578171_12965133-lq.mp3");

var Slap = /[Ss]lap/i;
//https://freesound.org/people/thecrow_br/sounds/578175/
var alrtSlap = new Audio ("https://freesound.org/data/previews/578/578175_12965133-lq.mp3");

var Piada = /[Pp]iada/i;
//https://freesound.org/people/thecrow_br/sounds/578170/
var alrtPiada = new Audio ("https://freesound.org/data/previews/578/578170_12965133-lq.mp3");

var Cricket = /[Cc]ricket|[Cc]ricri|[Gg]rilo|[Aa]lguem|[Aa]nyone/i;
//https://freesound.org/people/thecrow_br/sounds/578157/
var alrtCricket = new Audio ("https://freesound.org/data/previews/578/578157_12965133-lq.mp3");

var Owl = /[Oo]wl/i;
//https://freesound.org/people/thecrow_br/sounds/578164/
var alrtOwl = new Audio ("https://freesound.org/data/previews/578/578164_12965133-lq.mp3");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//-- Customize this next for your page or get lazy and use "body".
var cntnrNode = document.querySelector ("#rightsidebar");
if (typeof cntnrNode === "undefined")   console.error ("TM: Container node not found.");
else {
    var wordObsrv = new MutationObserver (alertOnWord);
    wordObsrv.observe (document.body, {childList: true, subtree: true} );
}
function alertOnWord (mutationRecords) {
    mutationRecords.forEach (muttn => {
        if (muttn.type === "childList"  &&  typeof muttn.addedNodes === "object") {
            muttn.addedNodes.forEach (newNode => {
                /*-- Restrict the kinds of nodes watched for better performance
                    and/or to avoid false positives.
                */
                if (newNode.nodeName === "DIV"  ||  newNode.nodeName === "SPAN"  ||  newNode.nodeName === "P") {
                    if (StartPoint.test (newNode.textContent) ) {
                        console.log ("Found new instance of StartPoint!");
                        StartOk = true;
                    }
                    if (StartOk === true ) {
                        ///////////////////////////////////////////// WEAPONS /////////////////////////////////////////////
                        if (Axe.test (newNode.textContent) ) {
                            alrt = alrtAxe;
                            playSFX = true;
                        }
                        else if (Sword.test (newNode.textContent) ) {
                            alrt = alrtSword;
                            playSFX = true;
                        }
                        else if (Hammer.test (newNode.textContent) ) {
                            alrt = alrtHammer;
                            playSFX = true;
                        }
                        else if (Arrow.test (newNode.textContent) ) {
                            alrt = alrtArrow;
                            playSFX = true;
                        }
                        else if (Staff.test (newNode.textContent) ) {
                            alrt = alrtStaff;
                            playSFX = true;
                        }
                        else if (Club.test (newNode.textContent) ) {
                            alrt = alrtClub;
                            playSFX = true;
                        }
                        else if (Punch.test (newNode.textContent) ) {
                            alrt = alrtPunch;
                            playSFX = true;
                        }
                        else if (Whip.test (newNode.textContent) ) {
                            alrt = alrtWhip;
                            playSFX = true;
                        }
                        else if (Bite.test (newNode.textContent) ) {
                            alrt = alrtBite;
                            playSFX = true;
                        }
                        else if (Shock.test (newNode.textContent) ) {
                            alrt = alrtShock;
                            playSFX = true;
                        }
                        ///////////////////////////////////////////// SPELLS /////////////////////////////////////////////
                        else if (Thunder.test (newNode.textContent) ) {
                            alrt = alrtThunder;
                            playSFX = true;
                        }
                        else if (Firebolt.test (newNode.textContent) ) {
                            alrt = alrtFirebolt;
                            playSFX = true;
                        }
                        else if (Fireball.test (newNode.textContent) ) {
                            alrt = alrtFireball;
                            playSFX = true;
                        }
                        else if (Heal.test (newNode.textContent) ) {
                            alrt = alrtHeal;
                            playSFX = true;
                        }
                        else if (Wololo.test (newNode.textContent) ) {
                            alrt = alrtWololo;
                            playSFX = true;
                        }
                        else if (MagicMissiles.test (newNode.textContent) ) {
                            alrt = alrtMagicMissiles;
                            playSFX = true;
                        }
                        else if (MagicShock.test (newNode.textContent) ) {
                            alrt = alrtMagicShock;
                            playSFX = true;
                        }
                        else if (Invisibility.test (newNode.textContent) ) {
                            alrt = alrtInvisibility;
                            playSFX = true;
                        }
                        else if (RayOfFrost.test (newNode.textContent) ) {
                            alrt = alrtRayOfFrost;
                            playSFX = true;
                        }
                        ///////////////////////////////////////////// EFFECTS /////////////////////////////////////////////
                        else if (Rage.test (newNode.textContent) ) {
                            alrt = alrtRage;
                            playSFX = true;
                        }
                        else if (Hands.test (newNode.textContent) ) {
                            alrt = alrtHands;
                            playSFX = true;
                        }
                        else if (Fall.test (newNode.textContent) ) {
                            alrt = alrtFall;
                            playSFX = true;
                        }
                        else if (Wilhelm.test (newNode.textContent) ) {
                            alrt = alrtWilhelm;
                            playSFX = true;
                        }
                        else if (Run.test (newNode.textContent) ) {
                            alrt = alrtRun;
                            playSFX = true;
                        }
                        /*else if (Flute.test (newNode.textContent) ) {
                                if (Fail == false) {
                                    alrt = alrtFlute;
                                }
                                else if (Fail == true) {
                                    alrt = alrtFluteFail;
                                    Fail = false;
                                }
                            playSFX = true;
                        }*/
                        else if (FF7.test (newNode.textContent) ) {
                            alrt = alrtFF7;
                            playSFX = true;
                        }
                        else if (Round1.test (newNode.textContent) ) {
                            alrt = alrtRound1;
                            playSFX = true;
                        }
                        else if (NaoConsegue.test (newNode.textContent) ) {
                            alrt = alrtNaoConsegue;
                            playSFX = true;
                        }
                        else if (Errou.test (newNode.textContent) ) {
                            alrt = alrtErrou;
                            playSFX = true;
                        }
                        else if (PegandoFogo.test (newNode.textContent) ) {
                            alrt = alrtPegandoFogo;
                            playSFX = true;
                        }
                        else if (Slap.test (newNode.textContent) ) {
                            alrt = alrtSlap;
                            playSFX = true;
                        }
                        else if (Piada.test (newNode.textContent) ) {
                            alrt = alrtPiada;
                            playSFX = true;
                        }
                        else if (Cricket.test (newNode.textContent) ) {
                            alrt = alrtCricket;
                            playSFX = true;
                        }
                        else if (Owl.test (newNode.textContent) ) {
                            alrt = alrtOwl;
                            playSFX = true;
                        }
                    }
                    if (playSFX == true) {
                        alrt.volume = vol;
                        alrt.play ();
                        playSFX = false;
                    }
                }
            } );
        }
    } );
}
