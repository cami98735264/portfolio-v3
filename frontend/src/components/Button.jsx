import React, { useEffect } from 'react';

const Button = ({ flexConfig, buttonStyle, dataAos, dataAosDelay, href, children }) => {
    const buttonStyles = {
        display: flexConfig.enable ? 'flex' : 'block',
        justifyContent: flexConfig.justify || 'center',
        alignItems: flexConfig.align || 'center',
        gap: flexConfig.gap || '16px',
        width: buttonStyle.width === 'full' ? '100%' : 'auto',
        padding: buttonStyle.size === 'small' ? '8px 16px' : buttonStyle.size === 'medium' ? '12px 24px' : '16px 32px',
        borderRadius: buttonStyle.borderRadius === 'small' ? '4px' : buttonStyle.borderRadius === 'medium' ? '8px' : buttonStyle.borderRadius === 'large' ? '16px' : '0',
        backgroundColor: buttonStyle.variant === 'primary' ? 'var(--primary)' : buttonStyle.variant === 'secondary' ? 'var(--foreground)' : 'var(--background)',
        border: buttonStyle.border ? '2px solid var(--border)' : 'none',
        cursor: 'pointer',
        color: 'var(--copy-light)',
    };

    return (
        <button
            style={buttonStyles}
            className="button"
            disabled={buttonStyle.disabled}
            data-aos={dataAos}
            data-aos-delay={dataAosDelay}
            onClick={() => {
                // ADD HREF LOGIC HERE
                if (href) {
                    window.open(href, '_blank');
                }
            }}
        >
            {children}
        </button>
    );
};

export default Button;