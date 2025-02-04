import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioItem from './components/PortfolioItem';
import './styles/App.css';

const portfolioItems = [
    {
        id: 1,
        title: 'Project One',
        description: 'Description of project one.',
        image: 'path/to/image1.jpg'
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Description of project two.',
        image: 'path/to/image2.jpg'
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'Description of project three.',
        image: 'path/to/image3.jpg'
    }
];

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                <h1>My Portfolio</h1>
                <div className="portfolio-items">
                    {portfolioItems.map(item => (
                        <PortfolioItem 
                            key={item.id} 
                            title={item.title} 
                            description={item.description} 
                            image={item.image} 
                        />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;