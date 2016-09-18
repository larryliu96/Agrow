# Agrow
Consolidating data collection to help farmers efficiently monitor and cultivate crop growth.

# Inspiration
Utilizing analytics to improve quality of agricultural services, scale crop production, and enhance the livelihoods of crop growers around the world.

# What it does
Our application autonomously collects data from a variety of sensors and pipelines it all into informative dashboard visuals. It will also leverage all of this data with the average green values of crops in a grid to create a predictive model on the amount of protein prevalent in those crops. This will enable farmers to make more confident business decisions when evaluating which crops will have the optimal protein values based on our aggregate data. 

# How we built it
Established connections between an Arduino Uno with: 1) soil moisture 2) humidity and 3) temperature sensors. 
Forwarded data from these Arduino-attached sensors into a Raspberry Pi for further processing. A camera module is also connected to our Raspberry Pi where images of crops within a grid are created based on configured time intervals. All of our hardware was contained in a custom 3-D printed unit. Data between the average green values obtained from our camera module program is matched with the other sensor data based on timestamps. This data is pipelined into our Influx Database where we're able to create meaningful analytics. Our front-end web application then receives the visualizations created and provides simple toggles in customizing the dashboards in real-time. 

# Challenges we ran into
Streaming data collection from Raspberry Pi directly into Influx Database in real-time with a reliable database connection was the most difficult challenge we ran into. It forced to us to understand network configurations around our different components in more detail. We were initially unable to establish stable connections to pipeline the mass amount of data with low latency. 

# Accomplishments that we're proud of
We have successfully processed and pipelined mass data from hardware devices and sensors into an simple web-application that's both intuitive and powerful. Ultimately, this solves many of the agricultural engineering issues around creating predictive analytics on the amount of protein in a set of crops. We were able to utilize all the sensors provide and develop a reliable structure to hold our hardware and be placed throughout several places across a farm at low costs. 

# What we learned
We learned how to leverage all of our unique skill-sets within the different components of the project. This ultimately required a modular-approach to our solution. Through unit testing we were first able to design some individual aspects, which we then assembled with higher-level software.

# What's next for BudLabs HypeTrain
Establish an effective business model for distributing sets of our hardware hack across all crop lands. Minimize circuit design by eliminating the use of an Arduino Uno to reduce latency and make our unit more minimalistic.

