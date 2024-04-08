import { NavLink } from 'react-router-dom';
import SvgIconCom from '../common/svg-icon-anim';

const TeamInfoArea2 = () => {
    return (
        <section className="team__info-area">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="team__info-wrap">
                            <div className="team__info-discord">
                                <div className="team__info-discord-info">
                                    <span className="sub">DINERO EN CUENTA</span>
                                    <h5 className="title"><NavLink to="https://discord.com/" target="_blank">$154.000</NavLink></h5>
                                </div>
                            </div>
                            <div className="team__info-discord">
                                <div className="team__info-discord-info">
                                    <span className="sub">tickets disponibles</span>
                                    <h5 className="title">5</h5>
                                </div>
                            </div>
                            <div className="team__info-discord">
                                <div className="team__info-discord-info">
                                    <span className="sub">pronósticos jugados</span>
                                    <h5 className="title">59</h5>
                                </div>
                            </div>
                            <div className="team__info-discord">
                                <div className="team__info-discord-info">
                                    <div className="text-center">
                                            <div className="tg-btn-3 mb-2">
                                                <SvgIconCom icon={"/assets/img/icons/shape.svg"} id="svg-1" />
                                                <span>Retirar dinero</span>
                                            </div>
                                    </div>
                                    <div className="text-center">
                                            <div className="tg-btn-3">
                                                <SvgIconCom icon={"/assets/img/icons/shape.svg"} id="svg-1" />
                                                <span>Cargar tickets</span>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamInfoArea2;