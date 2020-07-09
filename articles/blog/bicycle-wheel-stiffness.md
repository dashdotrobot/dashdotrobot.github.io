Title: Calculating bicycle wheel stiffness and stresses
Date: 17 May 2015
Tags: bicycle wheel, python
Slug: calculating-bicycle-wheel-stiffness-and-stresses
Featured: bicycle-wheel.png
JavaScripts: Chart.min.js, charts_wheel_stiff.js
Summary: ---

The [tensioned wire wheel](http://en.wikipedia.org/wiki/Wire_wheels) is one of the most elegant, successful, and enduring technologies of the 19th century. Although materials and manufacturing methods have continually improved, the basic design of the bicycle wheel has not changed fundamentally in the last century: a central hub is connected to a hoop-shaped outer rim by a set of tensioned spokes, which are threaded into adjustable spoke nipples set into the inside of the rim. The bicycle wheel is a type of [tensegrity](http://en.wikipedia.org/wiki/Tensegrity) structure: it combines elements which only carry tension (spokes) with elements which predominately carry compression (rim). When the weight of the rider is applied to the hub (through the ball bearings) the load is transmitted to the rim (and ultimately the road) primarily due to the shortening of the spokes directly underneath the hub.

When a wheelbuilder [builds a wheel](http://sheldonbrown.com/wheelbuild.html), they must make many decisions, including the components, geometry, materials, and spoke pattern. Some of these decisions are made for aesthetic reasons, but many of these choices can have a profound impact on the performance and durability of the wheel. I wrote __bikewheelcalc__ in Python to simulate the mechanical response of a bicycle wheel to different loads. This program can be used to calculate the stiffness (along different directions), rim stresses, and change in spoke tensions for wheels with custom geometries, materials, or lacing patterns. I hope it can be useful to wheelbuilders and mechanics in designing wheels or selecting components, or to students learning about finite-element simulation and stress analysis.

## [GRAB THE CODE FROM GITHUB](https://github.com/dashdotrobot/bike-wheel-fem)

Mechanics, wheel-builders, and bike enthusiasts are often concerned with wheel stiffness, [perhaps a little _too_ concerned](http://www.slowtwitch.com/Tech/Debunking_Wheel_Stiffness_3449.html). Nevertheless, it's an important metric, and one that we can calculate using the code. In short, radial, lateral, and rotational stiffness is a wheel's resistance to squashing, bending sideways, or twisting around the hub, respectively. For more details, check out [Greg Kopecky's article](http://www.slowtwitch.com/Tech/Debunking_Wheel_Stiffness_3449.html).

I will compare the stiffness of four wheels with identical spokes, hub, and rim, but different spoke patterns: cross-1, cross-2, cross-3, cross-4, and crow's foot.

![Bicycle wheel lacing patterns]({static}/images/diagrams.png)

__Radial stiffness.__ This is arguably the least important type of stiffness, since the inflated tire is usually on the order of 100 times smaller. The radial stiffness is primarily affected by the type of spoke (cross-section, material, and length). It also depends to a lesser degree on the rim material and cross-section because a stiffer rim distributes the deformation over more spokes. However it is not strongly affected by the lacing pattern. The plot below shows the calculated radial stiffness for 4 crossing patterns with increasing spoke angle, as well as the once-popular crows-foot lacing pattern.

<canvas id="chart_radial"></canvas>

__Lateral stiffness.__ Again, the spoke material and cross-section seem to play the largest role, although the rim is also important. Predictably, lacing patterns with shorter spokes, like cross-1 (or even radial spokes) yields higher lateral stiffness, since shorter spokes stretch less for a given load than longer spokes, all other things being equal. Note that although spoke material and cross-sectional area affect the lateral stiffness, spoke tension has little if any effect. I have some thoughts on why this is, but Damon Rinard has performed [stiffness measurements on detensioned wheels](http://sheldonbrown.com/rinard/wheel/index.htm) which demonstrate this.

<canvas id="chart_lateral"></canvas>

__Rotational stiffness.__ Finally, a parameter that is highly sensitive to the lacing pattern! It's easy to see why: when the hub rotates with respect to the rim, each spoke acts like a mini "wrench," resisting the twisting motion. It is much easier to resist a twisting motion by pulling or pushing tangent to the hub (imagine steering a bus with your hands at the bottom of the wheel, vs. at the sides). As the crossing number increases, the spoke pulling angle becomes tangent to the hub. The rotational stiffness of a radially-spoked wheel is extremely low, and may only be due to spoke tension and non-linear effects.

<canvas id="chart_rot"></canvas>
