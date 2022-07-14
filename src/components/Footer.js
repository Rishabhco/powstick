import React from 'react';
import {ReactComponent as PlayStore} from '../assets/playstore.svg';
import {ReactComponent as AppStore} from '../assets/appstore.svg';
import {ReactComponent as Facebook} from '../assets/fb.svg';
import {ReactComponent as Twitter} from '../assets/twitter.svg';
import {ReactComponent as Instagram} from '../assets/insta.svg';
import {ReactComponent as Pinterest} from '../assets/pinterest.svg';
import {ReactComponent as LinkedIn} from '../assets/linkedin.svg';
import {ReactComponent as Truck} from '../assets/truck.svg';
import {ReactComponent as PhoneBook} from '../assets/phonebook.svg';
import {ReactComponent as Cash} from '../assets/cash.svg';
import {ReactComponent as Recycle} from '../assets/recycle.svg';

export default function Footer() {
    return (
        <div className="py-20">
            <div class="flex flex-row justify-center space-x-16">
                <div class="basis-9/50 font-body space-y-4">
                    <div className='font-bold text-xl uppercase'>PRODUCTS</div>
                    <div className="font-body text-base flex flex-col font-semibold space-y-5">
                        <div>Geriatrics</div>
                        <div>Metabolics</div>
                        <div>Mother & Child</div>
                        <div>Organic</div>
                        <div>Neutraceuticals</div>
                        <div>Plant based foods</div>
                    </div>
                </div>
                <div class="basis-9/50 font-body space-y-4">
                    <div className='font-bold text-xl uppercase'>USEFUL LINKS</div>
                    <div className="font-body txt-base flex flex-col font-semibold	space-y-5">
                        <div>Contact us</div>
                        <div>Sell with us</div>
                        <div>Terms of Service</div>
                        <div>Refund Policy</div>
                        <div>Privacy Policy</div>
                        <div>Credits</div>
                    </div>
                </div>
                <div class="basis-4/10 space-y-8">
                    <div className='font-bold text-xl uppercase font-heading'>COMING SOON - MOBILE APPS</div>
                    <div className='flex flex-row space-x-6'>
                        <PlayStore/>
                        <AppStore/>
                    </div>
                    <div className='font-bold text-xl uppercase font-heading'>KEEP IN TOUCH</div>
                    <div className='flex flex-row space-x-6'>
                        <Facebook/>
                        <Twitter/>
                        <Pinterest/>
                        <Instagram/>
                        <LinkedIn/>
                    </div>
                </div>
                <div class="basis-9/50">
                    <div className="flex flex-col space-y-8">
                        <div className="flex flex-row space-x-8">
                            <div className='self-center'>
                                <Truck/>
                            </div>
                            <div className="flex flex-col">
                                <div className='font-bold font-heading text-xl'>Free Shipping</div>
                                <div className='font-semibold font-body text-base'>Above Rs.500</div>
                            </div>
                        </div> 
                        <div className="flex flex-row space-x-8">
                            <div className='self-center'>
                                <PhoneBook/>
                            </div>
                            <div className="flex flex-col">
                                <div className='font-bold font-heading text-xl'>Food Tech Grade</div>
                                <div className='font-semibold font-body text-base'>100% Guarantee</div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-8">
                            <div className='self-center'>
                                <Cash/>
                            </div>
                            <div className="flex flex-col">
                                <div className='font-bold font-heading text-xl'>Huge Savings</div>
                                <div className='font-semibold font-body text-base'>Abt Lowest Price</div>
                            </div>
                        </div>
                        <div className="flex flex-row space-x-8">
                            <div className='self-center'>
                                <Recycle/>
                            </div>
                            <div className="flex flex-col">
                                <div className='font-bold font-heading text-xl'>Easy Returns</div>
                                <div className='font-semibold font-body text-base'>No Questions Asked</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};