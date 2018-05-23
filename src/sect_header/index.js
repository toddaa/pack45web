import React from 'react';
import './header.css';
import CubLogo from './cubscout_logo.png';

const Header = () => (
    <section className="header">
        <div className="container-fluid">
            <div className="row">
                <div className="d-block d-sm-none text-center" style={{backgroundColor:'#FFFFFF', width:'100%'}}>
                    <a href="/"><img className="img-fluid" src={CubLogo} width="100" alt="Cub Scout Logo" /></a>
                </div>
                <div className="d-none d-sm-block d-md-none text-center" style={{backgroundColor:'#FFFFFF', width:'100%'}}>
                    <a href="/"><img className="img-fluid" src={CubLogo} alt="Cub Scout Logo" /></a>
                </div>
                <div className="d-none d-md-block text-center" style={{backgroundColor:'#FFFFFF'}}>
                    <a href="/"><img className="img-fluid" src={CubLogo} alt="Cub Scout Logo" /></a>
                </div>
                <div className="col-md-9" style={{marginTop:0}}>
                    <h1 style={{fontSize: '48px'}} className="text-center-xs text-left-sm text-left-md d-none d-xl-block">Cub Scout Pack 45 <br /><small style={{color:'#FFFFFF'}}>Charlotte, Michigan</small></h1>
                    <h1 style={{fontSize: '40px'}} className="d-xl-none text-center-xs text-left-sm text-left-md">Cub Scout Pack 45 <br /><small style={{color:'#FFFFFF'}}>Charlotte, Michigan</small></h1>

                    <div className="panel panel-default d-none d-xl-block">
                        <div className="panel-body">
                            <h4>Pack 45 serves boys and girls in kindergarten through fifth grades in the Charlotte, Michigan area.  Our Pack has been proudly chartered with the Water and Woods Field Service Council of the Boy Scouts of America by First Congregational Church.</h4>
                        </div>
                    </div>
                    <h4 className="d-xl-none">Pack 45 serves boys in the first through fifth grades in the Charlotte, Michigan area.  Our Pack has been proudly chartered with the Water and Woods Field Service Council of the Boy Scouts of America by First Congregational Church.</h4>
                </div>
            </div>
        </div>
    </section>
    /*<div className="navbar navbar-dark bg-cubscout fixed-top navbar-toggleable-sm py-3" data-toggle="affix">
        <a href="#" className="navbar-brand"><img className="responsive" src={CubLogo} width="100" alt="Cub Scout Logo" /> <h1>Cub Scout Pack 45</h1></a>
        <span className="navbar-text">
        Pack 45 serves boys in the first through fifth grades in the Charlotte, Michigan area.  Our Pack has been proudly chartered with the Water and Woods Field Service Council of the Boy Scouts of America by First Congregational Church.
        </span>
</div>*/
);

export default Header;