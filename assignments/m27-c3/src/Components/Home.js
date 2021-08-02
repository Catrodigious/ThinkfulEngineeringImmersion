import React from "react";


function Home(){
    return (
        <div className="container">
            <div className="row">
                <div className="col-2">
                <button type="button" className="btn btn-secondary">
                    <span class="iconic" data-glyph="plus" title="plus" aria-hidden="true"></span>
                    Create Deck
                </button>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            {/* card header */}
                            <div className="row">
                                <div className="col-8">
                                    <h5 class="card-title">Rendering in React</h5>
                                </div>
                                <div className="col-4">
                                    <p>3 Cards</p>
                                </div>
                            </div>
                        
                            <div className="row">
                                <div className="col-8">
                                    <button type="button" className="btn btn-secondary">View</button>
                                    <button type="button" className="btn btn-primary">Study</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-danger">Trash</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;