import React from 'react';
import Button from './Button.jsx';
import arrowRight from '../assets/icons/arrow-right.svg?url';
import { ShowMore } from '@re-dev/react-truncate'

const Project = ({ projectTitle, projectDescription, projectId, projectImage }) => {
    const styles = {
        container: {
            border: '2px solid var(--border)',
            width: '100%',
            display: 'flex',
            gap: '16px',
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: 'var(--foreground)',
            flexDirection: 'column',
        },
        buttonText: {
            fontWeight: 400,
            fontSize: 'clamp(1rem, 1.1vw, 1.5rem)',
            color: 'var(--copy-light)',
        },
        body: {
            flexDirection: 'column',
            display: 'flex',
            gap: '16px',
        },
        header: {
            flexWrap: 'wrap',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '8px',
        },
        headerTitle: {
            fontWeight: 'bold',
            fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
            color: 'var(--copy-light)',
        },
        imageContainer: {
            flex: 1,
        },
        image: {
            width: '100%',
            height: '450px',
            objectFit: 'cover',
            borderRadius: '8px',

        },
        description: {
            fontWeight: 300,
            fontSize: 'clamp(1rem, 1.1vw, 1.5rem)',
            color: 'var(--copy-light)',
        },
        arrowIcon: {
            width: '24px',
            height: '24px',
            objectFit: 'contain',
        },
    };
    let imageMediaQuerie = `
    @media (max-width: 768px) {
  .project-image {
    height: 250px !important;
  }

}`
    return (
        <div style={styles.container} data-aos="zoom-in-down" data-aos-delay="200">
            <style>
                {imageMediaQuerie}
            </style>
            <div style={styles.imageContainer}>
                <img src={projectImage} alt={projectTitle} className='project-image' style={styles.image} />
            </div>
            <div style={styles.body}>
                <div style={styles.header}>
                    <h3 style={styles.headerTitle}>{projectTitle}</h3>
                    <Button
                        flexConfig={{ enable: true, justify: 'center', align: 'center', gap: '16px' }}
                        buttonStyle={{ width: 'auto', variant: 'primary', size: 'small', border: false, borderRadius: 'medium', disabled: false }}
                        href={`/projects/${projectId}`}
                    >
                        <div style={styles.buttonText}>Ver proyecto</div>
                        <img src={arrowRight} style={styles.arrowIcon} alt="Arrow Right" />
                    </Button>
                </div>
                <div>
                    <ShowMore
                        lines={2}
                        more="Mostrar más"
                        less="Mostrar menos"
                        anchorClass="show-more-less-anchor"
                        style={{ color: 'var(--copy-light)'}}
                    >
                        <p style={styles.description}>{projectDescription}</p>
                    </ShowMore>
                </div>
            </div>
        </div>
    );
};

export default Project;