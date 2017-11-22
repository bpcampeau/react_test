import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container addressBook">
            <div className='row header'>
                <div className={"col-sm-12"}>
                    Bacon Corporation Address Book
                </div>
            </div>
            <div className='row body'>
                <div className="col-sm-4 no-gutters contact-column">
                    <div className={"search-box"}>
                        <input type="search" placeholder={"Filter Contacts"} />
                    </div>
                    <ul className={"contact-list"}>
                        <li className={"contact clearfix"}>
                            <figure className="contact-image">
                                <img src={" https://baconmockup.com/90/90"} alt={""} />
                            </figure>
                            <div className={"contact-name"}> McGuffin Muffin</div>
                        </li>
                        <li className={"contact clearfix"}>
                            <figure className="contact-image">
                                <img src={" https://baconmockup.com/90/90"} alt={""} />
                            </figure>
                            <div className={"contact-name"}> McGuffin Muffinn</div>
                        </li>
                        <li className={"contact clearfix"}>
                            <figure className="contact-image">
                                <img src={" https://baconmockup.com/90/90"} alt={""} />
                            </figure>
                            <div className={"contact-name"}> McGuffin Muffin</div>
                        </li>
                        <li className={"contact clearfix"}>
                            <figure className="contact-image">
                                <img src={" https://baconmockup.com/90/90"} alt={""} />
                            </figure>
                            <div className={"contact-name"}> McGuffin Muffin</div>
                        </li>
                    </ul>
                    <div className={"add-new"}>
                        <i className={'fa fa-plus'}></i> Add a new contact
                    </div>
                </div>
                <div className={"col-sm-8 contact-detail"}>
                    <div className="no-contact">
                        Select a contact to find more about them!
                    </div>
                </div>
            </div>
            <div className={'row footer'}>
                <div className={'col-sm-12'}>
                    <em>&copy; Copyright to the Bacon Contact Corporation</em>
                </div>
            </div>
        </div>


    );
  }
}

export default App;
