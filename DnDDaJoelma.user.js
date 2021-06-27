// ==UserScript==
// @name         DnD da Joelma
// @version      1.8
// @updateURL    https://raw.githubusercontent.com/thecrowbr/DnD51Pitangueiras/main/DnDDaJoelma.user.js
// @downloadURL  https://raw.githubusercontent.com/thecrowbr/DnD51Pitangueiras/main/DnDDaJoelma.user.js
// @description  Enhance your Roll20 sound experience
// @author       TheCrow
// @include      https://app.roll20.net/editor/
// @grant        unsafeWindow
// ==/UserScript==
/* eslint-disable no-multi-spaces */

var vol = 0.7;

//-- Set the watched terms using the awesome power of regex.
var StartPoint = /[Cc]ommands/i;
var StartOk = false;

var playSFX = false;
var alrt = new Audio ();

//var CritFail = /fullfail|critfail/i;
//var Fail = false;

//////////////////////////////////////////////////////////// WEAPON SOUNDS ////////////////////////////////////////////////////////////

var Axe = /[Hh]alberd|[Aa]xe|[Gg]reataxe/i;
//https://freesound.org/people/thecrow_br/sounds/574038/
var alrtAxe = new Audio ("https://freesound.org/data/previews/574/574038_12965133-lq.mp3");

var Sword = /[Ss]word|[Ss]hortsword|[Ll]ongsword|[Gg]reatsword|[Rr]apier|[Ff]lamatarra|[Ss]cimitar/i;
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

var Shock = /[Ss]hock|[Ss]torm [Bb]omerang/i;
//https://freesound.org/people/thecrow_br/sounds/578176/
var alrtShock = new Audio ("https://freesound.org/data/previews/578/578176_12965133-lq.mp3");

var Flute = /[Ff]lute/i;
//https://freesound.org/people/thecrow_br/sounds/578162/
var alrtFlute = new Audio ("https://freesound.org/data/previews/578/578162_12965133-lq.mp3");
//var FluteFail = /[Ff]lute/i;
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
                    if (StartPoint.test (newNode.textContent)) {
                        console.log ("Found new instance of StartPoint!");
                        StartOk = true;
                    }
                    if (StartOk == true) {
                        switch (true){
                        ///////////////////////////////////////////// WEAPONS /////////////////////////////////////////////
                            case Axe.test(newNode.textContent): {
                                alrt = alrtAxe;
                                playSFX = true;
                                break;
                            }
                            case Sword.test(newNode.textContent): {
                                alrt = alrtSword;
                                playSFX = true;
                                break;
                            }
                            case Hammer.test(newNode.textContent): {
                                alrt = alrtHammer;
                                playSFX = true;
                                break;
                            }
                            case Arrow.test(newNode.textContent): {
                                alrt = alrtArrow;
                                playSFX = true;
                                break;
                            }
                            case Staff.test(newNode.textContent): {
                                alrt = alrtStaff;
                                playSFX = true;
                                break;
                            }
                            case Club.test(newNode.textContent): {
                                alrt = alrtClub;
                                playSFX = true;
                                break;
                            }
                            case Punch.test(newNode.textContent): {
                                alrt = alrtPunch;
                                playSFX = true;
                                break;
                            }
                            case Whip.test(newNode.textContent): {
                                alrt = alrtWhip;
                                playSFX = true;
                                break;
                            }
                            case Bite.test(newNode.textContent): {
                                alrt = alrtBite;
                                playSFX = true;
                                break;
                            }
                        ///////////////////////////////////////////// SPELLS /////////////////////////////////////////////
                            case Thunder.test(newNode.textContent): {
                                alrt = alrtThunder;
                                playSFX = true;
                                break;
                            }
                            case Firebolt.test(newNode.textContent): {
                                alrt = alrtFirebolt;
                                playSFX = true;
                                break;
                            }
                            case Fireball.test(newNode.textContent): {
                                alrt = alrtFireball;
                                playSFX = true;
                                break;
                            }
                            case Heal.test(newNode.textContent): {
                                alrt = alrtHeal;
                                playSFX = true;
                                break;
                            }
                            case Wololo.test(newNode.textContent): {
                                alrt = alrtWololo;
                                playSFX = true;
                                break;
                            }
                            case MagicMissiles.test(newNode.textContent): {
                                alrt = alrtMagicMissiles;
                                playSFX = true;
                                break;
                            }
                            case MagicShock.test(newNode.textContent): {
                                alrt = alrtMagicShock;
                                playSFX = true;
                                break;
                            }
                            case Invisibility.test(newNode.textContent): {
                                alrt = alrtInvisibility;
                                playSFX = true;
                                break;
                            }
                            case RayOfFrost.test(newNode.textContent): {
                                alrt = alrtRayOfFrost;
                                playSFX = true;
                                break;
                            }
                        ///////////////////////////////////////////// EFFECTS /////////////////////////////////////////////
                            case Rage.test(newNode.textContent): {
                                alrt = alrtRage;
                                playSFX = true;
                                break;
                            }
                            case Hands.test(newNode.textContent): {
                                alrt = alrtHands;
                                playSFX = true;
                                break;
                            }
                            case Fall.test(newNode.textContent): {
                                alrt = alrtFall;
                                playSFX = true;
                                break;
                            }
                            case Wilhelm.test(newNode.textContent): {
                                alrt = alrtWilhelm;
                                playSFX = true;
                                break;
                            }
                            case Run.test(newNode.textContent): {
                                alrt = alrtRun;
                                playSFX = true;
                                break;
                            }
                            case Shock.test(newNode.textContent): {
                                alrt = alrtShock;
                                playSFX = true;
                                break;
                            }
                            /*case Flute.test(newNode.textContent): {
                                if (Fail == false) {
                                    alrt = alrtFlute;
                                }
                                else if (Fail == true) {
                                    alrt = alrtFluteFail;
                                    Fail = false;
                                }
                                playSFX = true;
                                break;
                            }*/
                            case FF7.test(newNode.textContent): {
                                alrt = alrtFF7;
                                playSFX = true;
                                break;
                            }
                            case Round1.test(newNode.textContent): {
                                alrt = alrtRound1;
                                playSFX = true;
                                break;
                            }
                            case NaoConsegue.test(newNode.textContent): {
                                alrt = alrtNaoConsegue;
                                playSFX = true;
                                break;
                            }
                            case Errou.test(newNode.textContent): {
                                alrt = alrtErrou;
                                playSFX = true;
                                break;
                            }
                            case PegandoFogo.test(newNode.textContent): {
                                alrt = alrtPegandoFogo;
                                playSFX = true;
                                break;
                            }
                            case Slap.test(newNode.textContent): {
                                alrt = alrtSlap;
                                playSFX = true;
                                break;
                            }
                            case Piada.test(newNode.textContent): {
                                alrt = alrtPiada;
                                playSFX = true;
                                break;
                            }
                            case Cricket.test(newNode.textContent): {
                                alrt = alrtCricket;
                                playSFX = true;
                                break;
                            }
                            case Owl.test(newNode.textContent): {
                                alrt = alrtOwl;
                                playSFX = true;
                                break;
                            }
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
