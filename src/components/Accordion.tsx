import React, { Component } from 'react';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';


interface IAccordionState{
    collapse : any,
    cards :  Array<carddata>

}

class carddata{
    index:number = 0;
    data: string="";
    Title:string="";
    constructor(index:number, data: string,Title:string){
        this.index = index;
        this.data = data;
        this.Title = Title;
    }
}

class Accordion extends Component<any,IAccordionState> {
  constructor(props : any) {
    let x: [string, number];
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = { 
          collapse : 0,  
           cards:[
               new carddata(1,"ProcDump is a command-line utility whose primary purpose is monitoring an application for CPU spikes and generating crash dumps during a spike that an administrator or developer can use to determine the cause of the spike. ProcDump also includes hung window monitoring (using the same definition of a window hang that Windows and Task Manager use), unhandled exception monitoring and can generate dumps based on the values of system performance counters. It also can serve as a general process dump utility that you can embed in other scripts.","ProcDump"),
               new carddata(2,"Time Travel Tracing, also called IDNA and TTT, from the Center for Software Excellence is a diagnostics infrastructure based on a model of collecting instruction level traces and then analyzing the traces offline to diagnose the failed behavior of applications.You can also read more about IDNA V2 and the current work at http://sharepoint/sites/debug/Tips/IDNA%20V2.aspx","IDNA Trace"),
               new carddata(3,"For Fiddler log collection, if your site is using https, make sure you’ve enabled the capture and decryption of https traffic: In Fiddler, go to Tools -> Options -> Https tab -> Select the check boxes ‘Capture HTTPS CONNECTs’ and ‘Decrypt HTTPS traffic’ Reproduce the issue Once the trace is captured, please save the session by going to File -> Save -> All Sessions. ","Fiddler Traces"),
               new carddata(4,"check permissions, check fiddler, if everything is fine then raise MS ticket","Graph issues")]
        };
           
    }
    toggle(e : any) {
      let event = e.target.dataset.event;
      this.setState({ collapse: this.state.collapse === Number(event) ? 0 : Number(event) });
    }
    render() {
      const {cards , collapse } = this.state;
      return (
        <div className="container">
            <h3 className="page-header">Tools information</h3>
            {cards.map((carddata: any)  => {
              return (
                <Card style={{ marginBottom: '1rem' }} key={carddata.index}>
                  <CardHeader onClick={this.toggle} data-event={carddata.index}>{carddata.Title}</CardHeader>
                  <Collapse isOpen={collapse === carddata.index}>
                  <CardBody>
                  {carddata.data}
                  </CardBody>
                  </Collapse>
                </Card>
              )
            })}     
            
          </div>
      );
    }
}

export default Accordion;