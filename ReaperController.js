'use strict';	

/**
* Main Reaper Controller object.  Builds all other objects.
*/
class ReaperController
{
	//Objects
	comms;
	tlist;
	optionsBar;
	transport;
	
	/**
	* Constructs a new ReaperController object.
	* @param {number} requested frames per second.  Default is 60.
	* @param {number} toggles track list object creation.
	* @param {number} toggles option bar object creation.
	* @param {number} toggles transport object creation.
	*/
	constructor(fps=60, useTrackList=1, useOptionBar=1, useTransport=1)
	{		
		//Create objects
		//All object auto-registers with ReaperComms as a listener
		this.comms = new ReaperComms(1000/fps);
		if (useTrackList != 0)
			this.tlist = new TrackManager(1000/fps, 1, [2,3,4,5,6,7,8,9,10]);          
		if (useOptionBar != 0)
			this.optionsBar = new OptionsBar(1000/fps); 
		if (useTransport != 0)
			this.transport = new Transport(1000/fps);
		
		//run reaper comms
		this.comms.startComms(); 
	}
};