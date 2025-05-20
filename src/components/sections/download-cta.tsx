'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import appstorepng from "@/assets/appstore.png"
import googleplaystorepng from "@/assets/googleplaystore.png"

const DownloadCTA = () => {
    const [platform, setPlatform] = useState<'ios' | 'android' | 'desktop'>('desktop');

    // Store links - replace with your actual app store links
    const APP_STORE_LINK = 'https://apps.apple.com/app/fashionhive/id123456789';
    const GOOGLE_PLAY_LINK = 'https://play.google.com/store/apps/details?id=com.fashionhive.app';

    useEffect(() => {
        // Detect platform when component mounts (client-side only)
        const detectPlatform = () => {
            const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;

            // iOS detection
            if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
                setPlatform('ios');
                return;
            }

            // Android detection
            if (/android/i.test(userAgent)) {
                setPlatform('android');
                return;
            }

            // Default to desktop
            setPlatform('desktop');
        };

        detectPlatform();
    }, []);

    return (
        <section className="w-full py-12 md:py-16 relative overflow-hidden">
            {/* Background gradient */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-90"
                aria-hidden="true"
            />

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Text content */}
                    <div className="md:w-1/2 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Get the FashionHive App
                        </h2>
                        <p className="text-lg md:text-xl mb-6 text-white/90">
                            Discover the latest trends, shop your favorite styles, and join our community of fashion enthusiasts.
                        </p>

                        {/* Download buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* Show both buttons on desktop or the appropriate one based on platform */}
                            {(platform === 'desktop' || platform === 'ios') && (
                                <a
                                    href={APP_STORE_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                                    aria-label="Download on the App Store"
                                >
                                    <Image
                                        src={appstorepng}
                                        alt="Download on the App Store"
                                        width={135}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </a>
                            )}

                            {(platform === 'desktop' || platform === 'android') && (
                                <a
                                    href={GOOGLE_PLAY_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                                    aria-label="Get it on Google Play"
                                >
                                    <Image
                                        src={googleplaystorepng}
                                        alt="Get it on Google Play"
                                        width={135}
                                        height={40}
                                        className="h-10 w-auto"
                                    />
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Phone image */}
                    <div className="md:w-1/3">
                        <div className="relative w-64 h-96 mx-auto">
                            <Image
                                src="/images/app-preview.png"
                                alt="FashionHive App Preview"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadCTA;