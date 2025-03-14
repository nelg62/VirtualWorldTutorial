Following Youtube Tutorial

Self-driving Car by Radu Mariescu-Istodor

Radu (cretor repository): https://github.com/gniziemazity/Self-driving-car

playlist video: https://www.youtube.com/watch?v=V_C7L7zelz8&list=PLB0Tybl0UNfYoJE7ZwsBQoDIG4YN9ptyY&index=12

up to video 8



https://overpass-turbo.eu/

[out:json];
(
	way['highway']
  ['highway' !~'pedestrian']
  ['highway' !~'footway']
  ['highway' !~'cycleway']
  ['highway' !~'path']
  ['highway' !~'service']
  ['highway' !~'corridor']
  ['highway' !~'track']
  ['highway' !~'steps']
  ['highway' !~'raceway']
  ['highway' !~'bridleway']
  ['highway' !~'proposed']
  ['highway' !~'construction']
  ['highway' !~'elevator']
  ['highway' !~'bus_guideway']
  ['access' !~'private']
  ['access' !~'no']
  	({{bbox}});
);
out body;
>;
out skel;
