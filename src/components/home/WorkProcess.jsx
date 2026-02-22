import React from 'react';
import SectionTitle from '../common/SectionTitle';

const WorkProcess = () => {
    return (
        <div className="work-process-area-three fix">
            <div className="work-process-wrapper pb-150">
                <div className="container">
                    <SectionTitle title="Our Working Process" />

                    <div className="work-process-content">
                        <div className="bg-shape-1 float-bob-x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="195" height="74" viewBox="0 0 195 74" fill="none">
                                <rect x="25" width="170" height="64" rx="32" fill="#D4EE36" />
                                <rect x="0.5" y="10.5" width="169" height="63" rx="31.5" stroke="black" strokeOpacity="0.2" strokeDasharray="5 5" />
                            </svg>
                        </div>
                        <div className="bg-shape-2 float-bob-x">
                            <svg xmlns="http://www.w3.org/2000/svg" width="195" height="74" viewBox="0 0 195 74" fill="none">
                                <rect x="25" width="170" height="64" rx="32" fill="#D4EE36" />
                                <rect x="0.5" y="10.5" width="169" height="63" rx="31.5" stroke="black" strokeOpacity="0.2" strokeDasharray="5 5" />
                            </svg>
                        </div>

                        <div className="work-process-items items-1">
                            <div className="title">Discovery</div>
                            <div className="arrow-icon">
                                <svg className="move-shape" xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0 0 64 16" fill="none">
                                    <path d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 8V9H63V8V7H0V8Z" fill="#202020" fillOpacity="0.2" />
                                </svg>
                            </div>
                        </div>
                        <div className="work-process-items items-2">
                            <div className="title">Automation Audit</div>
                            <ul>
                                <li className="gt-zoom-in-out">Process Mapping</li>
                                <li className="gt-zoom-in-out">Bottleneck ID</li>
                                <li className="gt-zoom-in-out">Tool Strategy</li>
                            </ul>
                            <div className="arrow-icon">
                                <svg className="move-shape-2" xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0 0 64 16" fill="none">
                                    <path d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 8V9H63V8V7H0V8Z" fill="#202020" fillOpacity="0.2" />
                                </svg>
                            </div>
                        </div>
                        <div className="work-process-items items-3">
                            <div className="item-content">
                                <div className="left-content">
                                    <div className="title">SaaS Design</div>
                                    <ul>
                                        <li className="gt-zoom-in-out">Architecture</li>
                                        <li className="gt-zoom-in-out">UX/UI Design</li>
                                        <li className="gt-zoom-in-out">Integration Plan</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="title">SaaS Development</div>
                            <div className="arrow-icon">
                                <svg className="move-shape-3" xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0 0 64 16" fill="none">
                                    <path d="M63.7071 8.70711C64.0976 8.31658 64.0976 7.68342 63.7071 7.29289L57.3431 0.928932C56.9526 0.538408 56.3195 0.538408 55.9289 0.928932C55.5384 1.31946 55.5384 1.95262 55.9289 2.34315L61.5858 8L55.9289 13.6569C55.5384 14.0474 55.5384 14.6805 55.9289 15.0711C56.3195 15.4616 56.9526 15.4616 57.3431 15.0711L63.7071 8.70711ZM0 8V9H63V8V7H0V8Z" fill="#202020" fillOpacity="0.2" />
                                </svg>
                            </div>
                            <ul>
                                <li className="gt-zoom-in-out">API Automations</li>
                                <li className="gt-zoom-in-out">Product Build</li>
                                <li className="gt-zoom-in-out">QA Testing</li>
                                <li className="gt-zoom-in-out">Launch</li>
                            </ul>
                        </div>
                        <div className="work-process-items items-4">
                            <div className="title">Support & Growth</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WorkProcess;
