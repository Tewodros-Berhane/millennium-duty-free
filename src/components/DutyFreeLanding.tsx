"use client";

import { useEffect, useMemo, useState, useRef } from "react";
import {
	Plane,
	ShoppingBag,
	Gift,
	Percent,
	MapPin,
	Clock,
	Shield,
	Search,
	Sparkles,
	ArrowRight,
	Star,
	Globe2,
	BadgeCheck,
	CreditCard,
	Package,
	Wallet,
	Phone,
	Loader2,
	CheckCircle2,
	XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import AdeyAbebaConfetti from "./AdeyAbabaConfetti";
import { NewYearBurst } from "./NewYearBurst";

// —————————————————————————————————————————————————————————————————
// SkyDuty Free — Airport Duty‑Free Shop Landing Page
// Tech: React + Tailwind + shadcn/ui + lucide-react
// Drop this component anywhere in a Next.js App Router project and render it.
// —————————————————————————————————————————————————————————————————

const ACCENT = "#f5c518"; // teal‑mint vibe

export default function DutyFreeLanding() {
	return (
		<div className="min-h-screen w-full bg-white text-slate-900">
			<GradientBG />
			<NavBar />
			<main className="relative z-10">
				<Hero />
				<VideoShowcase />
				{/* <TrustBar /> */}
				<AboutMillennium />
				<FeaturedCategories />
				{/* <FlashDeals /> */}
				{/* <Bestsellers /> */}
				{/* <ReserveCollect /> */}
				{/* <StoreLocator /> */}
				{/* <Testimonials /> */}
				<ContactUs />
			</main>
			<SiteFooter />
		</div>
	);
}

// —————————————————— UI Blocks ——————————————————

function NavBar() {
	return (
		<header className="sticky top-0 z-50 backdrop-blur bg-[#fafec9] border-white/10">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
				<a href="#" className="flex items-center gap-2 group">
					<div className="h-9 w-9 rounded-xl bg-gradient-to-tr  grid place-content-center ">
						{/* <Plane className="h-5 w-5" /> */}
						<Image
							src="/logo.png"
							alt="Millennium Duty Free"
							width={32}
							height={32}
							className="text-slate-900"
						/>
					</div>
					<span className="text-xl font-semibold tracking-tight">
						<span className="text-slate-900">Millennium</span>
						<span style={{ color: ACCENT }}>Duty</span>
						<span className="text-slate-900"> Free</span>
					</span>
				</a>
				<nav className="hidden md:flex items-center gap-7 text-sm">
					<a
						className="text-slate-900 hover:text-slate-900 transition"
						href="#shop"
					>
						Shop
					</a>
					<a
						className="text-slate-900 hover:text-slate-900 transition"
						href="#offers"
					>
						Exclusive Offers
					</a>
					<a
						className="text-slate-900 hover:text-slate-900 transition"
						href="#arrivals"
					>
						Arrivals
					</a>
					<a
						className="text-slate-900 hover:text-slate-900 transition"
						href="#rewards"
					>
						Rewards
					</a>
				</nav>
			</div>
		</header>
	);
}
function Hero() {
	return (
		<section className="relative h-[92vh] w-full overflow-hidden">
			{/* Background (video or slideshow) */}
			<HeroGallery />
			<div className="absolute inset-0 bg-white/15  z-[1]" />

			{/* New Year burst (confetti + fading message) */}
			<AdeyAbebaConfetti />
			<NewYearBurst durationMs={132321312321321} />

			{/* Main hero copy (stays on page) */}
			<div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
				<div className="max-w-3xl">
					<h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white/100">
						Welcome to{" "}
						<span style={{ color: ACCENT }}>
							Millennium Duty Free
						</span>
					</h1>

					<p className="mt-4 text-white/100 text-lg">
						At the crossroads of global diplomacy inside{" "}
						<strong>Addis Ababa Bole International Airport</strong>{" "}
						and
						<strong> Ethiopian Skylight Hotel</strong> discover
						world-class luxury curated for diplomats and discerning
						travelers.
					</p>
				</div>
			</div>
		</section>
	);
}

function HeroGallery() {
	const images = useMemo(
		() => ["/hero1.jpg",  "/hero3.jpg",],
		[]
	);
	const [idx, setIdx] = useState(0);

	useEffect(() => {
		const t = setInterval(
			() => setIdx((i) => (i + 1) % images.length),
			3500
		);
		return () => clearInterval(t);
	}, [images.length]);

	return (
		<div className="absolute inset-0">
			{images.map((src, i) => (
				<div
					key={i}
					className={`absolute inset-0 transition-opacity  duration-700 ${
						i === idx ? "opacity-100" : "opacity-0"
					}`}
				>
					<Image
						src={src}
						alt="Duty-free showcase"
						fill
						className="object-cover"
					/>
				</div>
			))}
		</div>
	);
}

function VideoShowcase() {
	const ref = useRef<HTMLVideoElement | null>(null);

	// Auto-play when visible; pause when scrolled away (saves battery & bandwidth)
	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const obs = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					el.play().catch(() => {
						/* ignore autoplay block since muted */
					});
				} else {
					el.pause();
				}
			},
			{ threshold: 0.35 }
		);
		obs.observe(el);
		return () => obs.disconnect();
	}, []);

	return (
		<section className="mx-auto max-w-6xl px-6 py-16">
			<div className="mx-auto max-w-5xl">
				<div className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 shadow-2xl ring-1 ring-white/10">
					{/* subtle glow */}
					<div className="pointer-events-none absolute -inset-[2px] rounded-[26px] bg-[radial-gradient(1200px_300px_at_50%_-20%,rgba(255,255,255,0.08),transparent)]" />

					<video
						ref={ref}
						src="/mdf-video.mp4"
						className="absolute inset-0 h-full w-full object-cover"
						autoPlay
						muted
						loop
						playsInline
						preload="metadata"
					/>

					{/* Optional caption overlay (remove if you don’t want text) */}
					<div className="absolute bottom-3 left-3 right-3 flex items-center justify-center rounded-xl bg-black/35 px-3 py-2 backdrop-blur-sm">
						<p className="text-sm text-white/90">
							Millennium Duty Free (Bole Intl. Airport & Skylight
							Hotel)
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
export { VideoShowcase };

function AboutMillennium() {
	const highlights = [
		{
			icon: (
				<span className="h-9 w-9 rounded-xl bg-[#6af35d] text-slate-900 grid place-content-center">
					<Globe2 className="h-5 w-5" />
				</span>
			),
			title: "Global Luxury, Ethiopian Welcome",
			text: "Situated at Addis Ababa Bole International Airport and Ethiopian Skylight Hotel, Millennium Duty Free connects Ethiopia’s heritage of hospitality with world-class luxury shopping.",
		},
		{
			icon: (
				<span className="h-9 w-9 rounded-xl bg-[#f4fb7b] text-slate-900 grid place-content-center">
					<Shield className="h-5 w-5" />
				</span>
			),
			title: "Trusted by Diplomats & Travelers",
			text: "Serving as a premier shopping destination for diplomats, business leaders, and global travelers transiting through Africa’s diplomatic capital.",
		},
		{
			icon: (
				<span className="h-9 w-9 rounded-xl bg-[#e97474] text-slate-900 grid place-content-center">
					<ShoppingBag className="h-5 w-5" />{" "}
				</span>
			),
			title: "Curated Collections",
			text: "Discover fragrances, spirits, chocolates and accessories carefully selected from the world’s most prestigious brands.",
		},
	];

	return (
		<section
			id="about"
			className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14"
		>
			<h2 className="text-3xl font-bold text-center text-slate-700 mb-10">
				About Millennium Duty Free
			</h2>
			<div className="grid md:grid-cols-3 gap-6">
				{highlights.map(({ icon, title, text }) => (
					<Card
						key={title}
						className="bg-white border border-slate-200"
					>
						<CardHeader className="pb-2">
							<CardTitle className="flex items-center gap-3 text-slate-900">
								{icon}
								{title}
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-slate-700">{text}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}

function FeaturedCategories() {
	const cats = [
		{
			name: "Fragrances",
			img: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=1600&auto=format&fit=crop",
		},
		{
			name: "Accessories",
			img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop",
		},
		{
			name: "Chocolates",
			img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
		},
		{
			name: "Spirits",
			img: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=1600&auto=format&fit=crop",
		},
		{
			name: "Tobacco",
			img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop",
		},
		{
			name: "Luxury",
			img: "https://images.unsplash.com/photo-1556228720-da4e85f25e15?q=80&w=1600&auto=format&fit=crop",
		},
	];
	return (
		<section
			id="shop"
			className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6"
		>
			<div className="flex items-end justify-between mb-6">
				<h2 className="text-2xl md:text-3xl font-bold">
					Featured Categories
				</h2>
				{/* <Button variant="secondary" className="text-slate-900 bg-white hover:bg-white/90">
          Explore All <ArrowRight className="h-4 w-4 ml-2" />
        </Button> */}
			</div>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
				{cats.map((c) => (
					<a
						key={c.name}
						className="group relative rounded-2xl overflow-hidden text-white"
					>
						<img
							src={c.img}
							alt={c.name}
							className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
						<div className="absolute bottom-4 left-4">
							{/* <Badge className="bg-slate-900/80 border-white/10 text-white">
                <Sparkles className="h-3.5 w-3.5 mr-1" /> New Picks
              </Badge> */}
							<h3 className="mt-2 text-xl font-semibold">
								{c.name}
							</h3>
						</div>
					</a>
				))}
			</div>
		</section>
	);
}

function ContactUs() {
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState<{
		ok: boolean;
		message: string;
	} | null>(null);
	const formRef = useRef<HTMLFormElement>(null);

	async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus(null);
		setLoading(true);

		const form = e.currentTarget;
		const formData = new FormData(form);
		const payload = {
			name: String(formData.get("name") || ""),
			email: String(formData.get("email") || ""),
			message: String(formData.get("message") || ""),
		};

		try {
			const res = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			const data = await res.json();
			if (res.ok && data.ok) {
				setStatus({
					ok: true,
					message: "Message sent! We’ll get back to you shortly.",
				});
				formRef.current?.reset();
			} else {
				setStatus({
					ok: false,
					message: data?.error || "Failed to send. Please try again.",
				});
			}
		} catch {
			setStatus({
				ok: false,
				message:
					"Network error. Please check your connection and try again.",
			});
		} finally {
			setLoading(false);
		}
	}

	return (
		<section
			id="contact"
			className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16"
		>
			<Card className="rounded-3xl border border-slate-200 bg-white  p-6 md:p-10">
				<div className="grid lg:grid-cols-2 gap-6 items-center">
					{/* Left side text */}
					<div>
						<h3 className="text-2xl md:text-3xl font-bold">
							Contact Us
						</h3>
						<p className="mt-2 text-slate-700">
							Have a question about our duty-free store? Fill out
							the form and we’ll get back to you as soon as
							possible.
						</p>
						<ul className="mt-4 text-white/80 text-sm space-y-2">
							<li className="flex items-center gap-2 text-slate-900">
								<MapPin className="h-4 w-4 text-[#1e5183]" />
								Addis Ababa Bole Airport · Skylight Hotel
							</li>
							<li className="flex items-center gap-2 text-slate-900">
								<Clock className="h-4 w-4 text-[#1e5183]" />{" "}
								Open Hours - 24/7
							</li>
							<li className="flex items-center gap-2 text-slate-900">
								<Phone className="h-4 w-4 text-[#1e5183]" /> +1
								(800) 123-4567 - Hana gebre/Skylight Shop
								Manager
							</li>
						</ul>
					</div>

					{/* Right side form */}
					<form
						ref={formRef}
						className="space-y-4"
						onSubmit={onSubmit}
					>
						<Input
							name="name"
							type="text"
							required
							placeholder="Your Name"
							className="bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400"
						/>
						<Input
							name="email"
							type="email"
							required
							placeholder="Your Email"
							className="bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400"
						/>
						<textarea
							name="message"
							required
							placeholder="Your Message"
							rows={4}
							className="w-full rounded-md bg-white border border-slate-200 text-slate-900 placeholder:text-slate-400 p-3"
						/>

						<Button
							type="submit"
							className="w-full bg-yellow-200 hover:bg-yellow-400 text-slate-900 font-semibold disabled:opacity-70"
							disabled={loading}
						>
							{loading ? (
								<span className="inline-flex items-center gap-2">
									<Loader2 className="h-4 w-4 animate-spin" />
									Sending…
								</span>
							) : (
								"Send Message"
							)}
						</Button>

						{/* Inline status message */}
						{status && (
							<div
								className={`flex items-start gap-2 text-sm ${
									status.ok
										? "text-slate-900"
										: "text-rose-300"
								}`}
								role="status"
								aria-live="polite"
							>
								{status.ok ? (
									<CheckCircle2 className="h-4 w-4 mt-0.5" />
								) : (
									<XCircle className="h-4 w-4 mt-0.5" />
								)}
								<p>{status.message}</p>
							</div>
						)}
					</form>
				</div>
			</Card>
		</section>
	);
}

function SiteFooter() {
	return (
		<footer className="border-t border-white/10 bg-slate-950/60">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-4 gap-6 text-sm text-white/70">
				<div>
					<div className="flex items-center gap-2">
						<div className="h-8 w-8 rounded-lg bg-gradient-to-tr from-teal-400 to-cyan-500 grid place-content-center">
							<Plane className="h-4 w-4 text-slate-900" />
						</div>
						<p className="font-semibold text-white">
							Millennium Duty Free
						</p>
					</div>
					<p className="mt-3">
						Your airport companion for savings and luxury.
					</p>
				</div>
				<div>
					<p className="font-semibold text-white mb-2">Shop</p>
					<ul className="space-y-1">
						<li>
							<a className="hover:text-white" href="#">
								Fragrances
							</a>
						</li>
						<li>
							<a className="hover:text-white" href="#">
								Cosmetics
							</a>
						</li>
						<li>
							<a className="hover:text-white" href="#">
								Chocolates
							</a>
						</li>
						<li>
							<a className="hover:text-white" href="#">
								Spirits
							</a>
						</li>
					</ul>
				</div>
				<div>
					<p className="font-semibold text-white mb-2">
						Traveler Help
					</p>
					<ul className="space-y-1">
						<li>
							<a className="hover:text-white" href="#">
								Reserve & Collect
							</a>
						</li>
						<li>
							<a className="hover:text-white" href="#">
								Baggage Rules
							</a>
						</li>
						<li>
							<a className="hover:text-white" href="#">
								FAQs
							</a>
						</li>
					</ul>
				</div>
				<div>
					<p className="font-semibold text-white mb-2">Contact</p>
					<ul className="space-y-1">
						<li className="flex items-center gap-2">
							<Clock className="h-4 w-4" /> 24/7 Support
						</li>
						<li className="flex items-center gap-2">
							<MapPin className="h-4 w-4" /> Air‑side, Main
							Concourse
						</li>
					</ul>
				</div>
			</div>
			<div className="border-t border-white/10 py-5 text-center text-xs text-white/50">
				© {new Date().getFullYear()} Millennium Duty Free. All rights
				reserved.
			</div>
		</footer>
	);
}

function GradientBG() {
	return (
		<div
			aria-hidden
			className="pointer-events-none fixed inset-0 -z-0 overflow-hidden"
		>
			<div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[1200px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255, 255, 224,0.18),transparent_60%)]" />
			<div className="absolute -bottom-40 right-1/3 h-[500px] w-[1000px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255, 255, 224,0.16),transparent_60%)]" />
		</div>
	);
}
