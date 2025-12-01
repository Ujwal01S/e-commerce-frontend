# exclusive-frontend

## About Project

Project Overview
Exclusive is a modern, full-featured e-commerce web application built with Next.js 15, TypeScript, and Tailwind CSS. It provides a seamless shopping experience with internationalization support (English and Nepali), persistent cart and wishlist functionality, and a clean, responsive UI.

## Key Features

🛒 Shopping Experience
Product Catalog: Browse products with detailed views, ratings, and discounts
Smart Search: Debounced real-time search across product titles, descriptions, and categories
Cart Management: Add, update, and remove items with quantity control and subtotal calculations
Wishlist: Save favorite products with persistent storage across sessions
Checkout Flow: Complete checkout form with coupon code validation

## 🔐 Authentication

NextAuth.js integration with credentials provider
Custom login and signup forms with Zod validation
Mock authentication system for demo purposes
Protected user routes (cart, wishlist, account)
Available Auth Data :
{
id: "1",
email: "test@test.com",
name: "Tester1",
password: "test1234",
phone: "1023456789",
},
{
id: "2",
email: "admin@admin.com",
name: "Tester2",
password: "admin1234",
phone: "9876543201",
},

## 🌐 Internationalization (i18n)

Multi-language support (English & Nepali) using next-intl
Locale-specific routing (/en, /ne)
Dynamic metadata generation per locale for SEO optimization
Language switcher component in header

## 💾 State Management

Zustand stores with localStorage persistence:
Cart store: Manages items, quantities, subtotals, and pricing
Wishlist store: Tracks favorite products
Search store: Handles debounced search queries
Automatic hydration on app initialization

## 📱 Pages & Routes

Public: Landing page, product details, about, contact
Auth: Login and signup pages
User: Cart, wishlist, account management, checkout
Dynamic routing with locale prefixes
🛠️ Technical Stack
Framework: Next.js 15 (App Router)
Language: TypeScript
Styling: Tailwind CSS
Forms: React Hook Form + Zod validation
State: Zustand with persistence
Auth: NextAuth.js
i18n: next-intl

## 🔐 Route Protection

Protect Authenticated Route from unauthorized user
