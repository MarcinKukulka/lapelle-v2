'use client';
import { motion } from 'framer-motion';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/ui/accordion';

type offersAccordions = {
	id: string;
	title?: string | null | undefined;
	content?: string | null | undefined;
};

const accordionVariants = {
	hidden: { opacity: 0, x: -100 },
	visible: { opacity: 1, x: 0 },
};

export const Accordions = ({
	offersAccordions,
}: {
	offersAccordions: offersAccordions[];
}) => {
	return (
		<motion.div
			initial="hidden"
			animate="visible"
			variants={accordionVariants}
			transition={{ duration: 0.5 }}
			className="mt-12 gap-y-4 md:mt-0 md:w-3/6"
		>
			<Accordion type="single" collapsible>
				{offersAccordions.map(({ id, title, content }) => {
					return (
						<AccordionItem
							key={id}
							className="mb-3 border border-black/20 px-3 leading-8 hover:bg-gold/60 data-[state=open]:bg-gold/40"
							value={id.toString()}
						>
							<AccordionTrigger className="font-semibold hover:no-underline data-[state=open]:mb-3 data-[state=open]:border-b data-[state=open]:border-b-black/30 ">
								{title}
							</AccordionTrigger>
							<AccordionContent>{content}</AccordionContent>
						</AccordionItem>
					);
				})}
			</Accordion>
		</motion.div>
	);
};
