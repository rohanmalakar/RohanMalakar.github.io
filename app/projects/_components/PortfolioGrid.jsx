import { PortfolioCard } from './PortfolioCard';

export const PortfolioGrid = ({ portfolioItems }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
      {portfolioItems.map((item, index) => (
        <PortfolioCard key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};