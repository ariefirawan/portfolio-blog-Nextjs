import PortfolioApi from '../../../lib/api/portfolios';

export default async function createPortfolio(req, res) {
  try {
    const portfolioData = req.body;
    const json = await new PortfolioApi().createPortfolio(portfolioData);
    return res.json(json.data);
  } catch (e) {
    return res.status(e.status || 400).end(e.message);
  }
}
