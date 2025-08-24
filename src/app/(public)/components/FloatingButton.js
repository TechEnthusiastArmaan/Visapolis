// src/app/(public)/components/FloatingButton.js
'use client'; // This component uses Next.js Link, so it's a good practice.

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookReader } from '@fortawesome/free-solid-svg-icons'; // The icon in your image is fa-book-reader

export default function FloatingButton() {
    return (
        <Link href="/appointment" className="floating-consultation-btn">
            <div className="btn-text">
                Book a Consultation
            </div>
            <div className="btn-icon">
                <FontAwesomeIcon icon={faBookReader} />
            </div>
        </Link>
    );
}