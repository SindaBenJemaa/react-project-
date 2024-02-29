import React from "react";
import paris from "../assets/paris.jpg";
import roma from "../assets/roma.jpg";
import london from "../assets/london.jpg";
import japan from "../assets/japan.jpg";
import vienna from "../assets/vienne.jpg";
import germany from "../assets/germany.jpg";
import VoyageCard from "./VoyageCard";

const destination = [
  {
    city: "Paris",
    desc: "Paris is the capital and most populous city of France. Situated on the Seine River, in the north of the country, it is in the centre of the Île-de-France region, also known as the région parisienne, Paris Region. The City of Paris has an area of 105 km² and a population of 2,241,346 (2014 estimate). Since the 19th century, the built-up area of Paris has grown far beyond its administrative borders; together with its suburbs, the whole agglomeration has a population of 10,550,350 (Jan. 2012 census).",
    img: paris,
  },
  {
    city: "Roma",
    desc: "Rome, historic city and capital of Roma provincia (province), of Lazio regione (region), and of the country of Italy. Rome is located in the central portion of the Italian peninsula, on the Tiber River about 15 miles (24 km) inland from the Tyrrhenian Sea.Once the capital of an ancient republic and empire whose armies and polity defined the Western world in antiquity and left seemingly indelible imprints thereafter, the spiritual and physical seat of the Roman Catholic Church, and the site of major pinnacles of artistic and intellectual achievement.",
    img: roma,
  },
  ,
  {
    city: "London",
    desc: "London, city, capital of the United Kingdom. It is among the oldest of the world’s great cities—its history spanning nearly two millennia—and one of the most cosmopolitan. By far Britain’s largest metropolis, it is also the country’s economic, transportation, and cultural centre.London is situated in southeastern England, lying astride the River Thames some 50 miles (80 km) upstream from its estuary on the North Sea. In satellite photographs the metropolis can be seen to sit compactly in a Green Belt of open land, with its principal ring highway (the M25 motorway) threaded around it at a radius of about 20 miles (30 km) from the city centre.",
    img: london,
  },
  ,
  {
    city: "Vienna",
    desc: "Vienna, city and Bundesland (federal state), the capital of Austria. Of the country’s nine states, Vienna is the smallest in area but the largest in population. Modern Vienna has undergone several historical incarnations. From 1558 to 1918 it was an imperial city—until 1806 the seat of the Holy Roman Empire and then the capital of the Austro-Hungarian Empire. In 1918 it became the capital of the truncated, landlocked central European country that emerged from World War I as a republic. From 1938 to 1945 Austria was a part of Adolf Hitler’s “Greater” Germany, and Vienna became “Greater” Vienna, reflecting the Nazi revision of the city limits.",
    img: vienna,
  },
  ,
  {
    city: "Germany",
    desc: "Germany is a country located in Central Europe, bordered by Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, and France, Luxembourg, Belgium, and the Netherlands to the west. It has a population of over 83 million people, making it the most populous country in the European Union.",
    img: germany,
  },
  ,
  {
    city: "Japan",
    desc: " Japan is an island nation located in East Asia, situated in the Pacific Ocean. It consists of four main islands—Honshu, Hokkaido, Kyushu, and Shikoku—as well as numerous smaller islands. Tokyo, the capital city, is one of the most populous and technologically advanced metropolises in the world.",
    img: japan,
  },
];
const TravelingCards = () => {
  return (
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {destination.map((item, index) => {
          return <VoyageCard key={index} {...item} />;
        })}
      </div>
  );
};

export default TravelingCards;
