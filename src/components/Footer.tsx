// import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-slate-100 bg-white mt-20 pt-16 pb-12">
            <div className="container mx-auto px-4">

                <div className="grid grid-cols-12 gap-8 pb-12">
                    <div className="col-span-12 md:col-span-5 space-y-4">
                        <div className="flex items-center gap-2">
                            <span className="bg-[#DB2777] text-white font-bold text-xs px-2 py-1 rounded-md">
                                DS
                            </span>
                            <span className="font-bold text-xl text-slate-900">Dev Stack</span>
                        </div>
                        <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex items-center gap-4 text-slate-600 font-medium text-sm pt-2">
                            <a href="#" className="hover:text-slate-900 transition-colors">GitHub</a>
                            <a href="#" className="hover:text-slate-900 transition-colors">Twitter</a>
                            <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
                        </div>
                    </div>


                    <div className="col-span-4 md:col-span-2 space-y-3">
                        <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">PRODUCT</h4>
                        <ul className="space-y-2 text-sm text-slate-500 font-medium">
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Home</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Technologies</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Projects</a></li>
                        </ul>
                    </div>


                    <div className="col-span-4 md:col-span-2 space-y-3">
                        <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">COMPANY</h4>
                        <ul className="space-y-2 text-sm text-slate-500 font-medium">
                            <li><a href="#" className="hover:text-slate-900 transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Careers</a></li>
                        </ul>
                    </div>


                    <div className="col-span-4 md:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold text-slate-900 tracking-wider uppercase">LEGAL</h4>
                        <ul className="space-y-2 text-sm text-slate-500 font-medium">
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>


                <div className="border-t border-slate-100 pt-8 flex items-center justify-between text-xs text-slate-400 font-medium">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="#" className="hover:text-slate-600 transition-colors">Privacy</a>
                        <a href="#" className="hover:text-slate-600 transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;