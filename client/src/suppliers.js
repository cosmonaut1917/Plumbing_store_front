import asc from "/src/assets/images/asc.png"
import actionfilters from "/src/assets/images/ami.png";
import adspipe from "/src/assets/images/adspipe.png";
import americanstandard from "/src/assets/images/americanstandard.png";
import anvilintl from "/src/assets/images/anvilintl.jpg";
import bobrick from "/src/assets/images/bobrick.png";
import brizo from "/src/assets/images/brizo.jpg";
import bakerwatersystems from "/src/assets/images/bakerwatersystems.gif";
import cashacme from "/src/assets/images/cashacme.png";
import championirrigation from "/src/assets/images/championirrigation.png";
import charlottepipe from "/src/assets/images/charlottepipe.gif";
import chicagofaucets from "/src/assets/images/chicagofaucets.gif";
import cimberiovalve from "/src/assets/images/cimberiovalve.gif";
import craneplumbing from "/src/assets/images/craneplumbing.gif";
import cresline from "/src/assets/images/cresline.png";
import danze from "/src/assets/images/danze.gif";
import decolav from "/src/assets/images/decolav.png";
import deltafaucet from "/src/assets/images/deltafaucet.png";
import dewalt from "/src/assets/images/dewalt.gif";
import duraplastics from "/src/assets/images/duraplastics.gif";
import elkay from "/src/assets/images/elkay.png";
import gingerco from "/src/assets/images/gingerco.png";
import insinkerator from "/src/assets/images/insinkerator.gif";
import maax from "/src/assets/images/maax.png";
import mansfieldplumbing from "/src/assets/images/mansfieldplumbing.png";
import moen from "/src/assets/images/moen.png";
import mrsteam from "/src/assets/images/mrsteam.png";
import mustee from "/src/assets/images/mustee.jpg";
import newportbrass from "/src/assets/images/newportbrass.png";
import noritz from "/src/assets/images/noritz.png";
import norwesco from "/src/assets/images/norwesco.gif";
import pfisterfaucets from "/src/assets/images/pfisterfaucets.png";
import rainbird from "/src/assets/images/rainbird.gif";
import regencyfire from "/src/assets/images/regencyfire.png";
import ridgid from "/src/assets/images/ridgid.gif";
import saniflo from "/src/assets/images/saniflo.png";
import sloanvalve from "/src/assets/images/sloanvalve.png";
import spears from "/src/assets/images/spears.png";
import statewaterheaters from "/src/assets/images/statewaterheaters.png";
import symmons from "/src/assets/images/symmons.gif";
import triangletube from "/src/assets/images/triangletube.jpg";
import uponorusa from "/src/assets/images/uponorusa.gif";
import viega from "/src/assets/images/viega.gif";
import watcomfg from "/src/assets/images/watcomfg.gif";
import watts from "/src/assets/images/watts.png";
import woodfordmfg from "/src/assets/images/woodfordmfg.jpg";
import zurn from "/src/assets/images/zurn.jpg";
import sharkbite from "/src/assets/images/sharkbite.jpg";
import reinke from "/src/assets/images/reinke.png";

const suppliers = [
    { alt: "Action Filters", url: "http://www.actionfilters.com/", image: actionfilters },
    { alt: "ADS Pipe", url: "http://www.ads-pipe.com/en/", image: adspipe },
    { alt: "American Standard", url: "http://www.americanstandard-us.com/", image: americanstandard },
    { alt: "Anvil Intl", url: "http://www.anvilintl.com/", image: anvilintl },
    { alt: "Bobrick", url: "http://www.bobrick.com/", image: bobrick },
    { alt: "Brizo", url: "http://www.brizo.com/", image: brizo },
    { alt: "Baker Water Systems", url: "http://www.bakerwatersystems.com/", image: bakerwatersystems },
    { alt: "Cash Acme", url: "http://www.cashacme.com", image: cashacme },
    { alt: "Champion Irrigation", url: "http://www.championirrigation.com/", image: championirrigation },
    { alt: "Charlotte Pipe", url: "http://www.charlottepipe.com/", image: charlottepipe },
    { alt: "Chicago Faucets", url: "http://www.chicagofaucets.com/", image: chicagofaucets },
    { alt: "Cimberio Valve", url: "http://www.cimberiovalve.com/", image: cimberiovalve },
    { alt: "Crane Plumbing", url: "http://www.craneplumbing.com/", image: craneplumbing },
    { alt: "Cresline", url: "http://www.cresline.com/", image: cresline },
    { alt: "Danze", url: "http://www.danze.com/", image: danze },
    { alt: "Decolav", url: "http://www.decolav.com/", image: decolav },
    { alt: "Delta Faucet", url: "http://www.deltafaucet.com", image: deltafaucet },
    { alt: "Dewalt", url: "http://www.dewalt.com/", image: dewalt },
    { alt: "Duraplastics", url: "http://www.duraplastics.com/", image: duraplastics },
    { alt: "Elkay", url: "http://www.elkay.com/", image: elkay },
    { alt: "Ginger Co", url: "http://www.gingerco.com/", image: gingerco },
    { alt: "Insinkerator", url: "http://www.insinkerator.com", image: insinkerator },
    { alt: "Maax", url: "http://www.maax.com", image: maax },
    { alt: "Mansfield Plumbing", url: "http://www.mansfieldplumbing.com/", image: mansfieldplumbing },
    { alt: "Moen", url: "http://www.moen.com/", image: moen },
    { alt: "Mr. Steam", url: "http://www.mrsteam.com", image: mrsteam },
    { alt: "Mustee", url: "http://www.mustee.com/", image: mustee },
    { alt: "Newport Brass", url: "http://www.newportbrass.com/", image: newportbrass },
    { alt: "Noritz", url: "http://www.noritz.com/", image: noritz },
    { alt: "Norwesco", url: "http://www.norwesco.com/", image: norwesco },
    { alt: "Pfister Faucets", url: "http://www.pfisterfaucets.com/home.aspx", image: pfisterfaucets },
    { alt: "Rainbird", url: "http://rainbird.com/", image: rainbird },
    { alt: "Regency Fire", url: "http://www.regency-fire.com/Home.aspx", image: regencyfire },
    { alt: "Ridgid", url: "https://www.ridgid.com/", image: ridgid },
    { alt: "Saniflo", url: "http://www.saniflo.com/", image: saniflo },
    { alt: "Sloan Valve", url: "http://www.sloanvalve.com/", image: sloanvalve },
    { alt: "Spears", url: "http://www.spears.com/", image: spears },
    { alt: "State Water Heaters", url: "http://www.statewaterheaters.com/", image: statewaterheaters },
    { alt: "Symmons", url: "http://www.symmons.com/", image: symmons },
    { alt: "Triangle Tube", url: "http://www.triangletube.com/", image: triangletube },
    { alt: "Uponor USA", url: "http://www.uponor-usa.com/", image: uponorusa },
    { alt: "Viega", url: "http://www.viega.net", image: viega },
    { alt: "Watco Mfg", url: "http://www.watcomfg.com", image: watcomfg },
    { alt: "Watts", url: "http://www.watts.com", image: watts },
    { alt: "Woodford Mfg", url: "http://www.woodfordmfg.com", image: woodfordmfg },
    { alt: "Zurn", url: "http://www.zurn.com", image: zurn },
    { alt: "Sharkbite", url: "http://www.sharkbite.com/", image: sharkbite },
    { alt: "Reinke", url: "https://www.reinke.com/", image: reinke }
]

export default suppliers