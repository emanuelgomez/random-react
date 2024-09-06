import {useRef} from 'react';

const elements = [
    'GalacticVoyager',
    'NebulaDreams',
    'QuantumLeap',
    'StellarFusion',
    'CosmicWonder',
    'AstralWaves',
    'LuminousEclipse',
    'NovaCascade',
    'ZenithJourney',
    'CelestialRhythm',
    'MeteorShower',
    'LunarGlow',
    'InterstellarDrift',
    'StarboundOdyssey',
    'GalacticEcho',
    'NebulaBurst',
    'SolarFlare',
    'EtherealVoyage',
    'MeteoricRise',
    'VoidWalker',
    'StarlightPulse',
    'AstralVoyage',
    'SupernovaBlast',
    'QuantumGlow',
    'CosmicHarmony',
    'CelestialDance',
    'NebulaQuest',
    'StellarVoyage',
    'AstralTide',
    'LuminousNebula',
    'GalacticDrift',
    'SolarEclipse',
];


export const Component = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (gridRef.current) {
            const { scrollLeft, clientWidth } = gridRef.current;
            const scrollTo =
                direction === 'left'
                    ? scrollLeft - clientWidth
                    : scrollLeft + clientWidth;
            gridRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };
    return (
        <div className="container">
            <button
                className={`icon-button`}
                aria-label="Scroll left"
                onClick={() => scroll('left')}
            >
                back
            </button>

            <div className="grid-container" ref={gridRef}>
                {elements.map((element) => (
                    <div key={element} className="grid-item">
                        <div className="item-header">
                            <div className="circle" style={{ backgroundColor: 'red' }}></div>
                            <h2>{element}</h2>
                        </div>
                        <div
                            style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: 'white',
                            }}
                        ></div>
                    </div>
                ))}
            </div>

            <button
                className={`icon-button`}
                aria-label="Scroll right"
                onClick={() => scroll('right')}
            >
                next
            </button>
        </div>
    );
};
