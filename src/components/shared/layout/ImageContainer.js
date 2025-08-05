import { useEffect, useState } from 'react';

const ImageWithLoader = ({ src, alt, className, containerClassName, style }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setIsLoaded(false);
        setError(false);

        const img = new Image();
        img.src = src;

        img.onload = () => {
            setIsLoaded(true);
        };

        img.onerror = () => {
            setError(true);
            setIsLoaded(true);
        };
    }, [src]);

    return (
        <div className={`h-full w-full ${containerClassName}`}>
            {!isLoaded && (
                <div className="flex items-center justify-center bg-gray-800 bg-opacity-50 w-full h-full">
                    <div className="flex space-x-2">
                        <div className="w-2 h-2 bg-blue-200 rounded-full animate-dot-bounce" style={{ animationDelay: '0s' }}></div>
                        <div className="w-2 h-2 bg-blue-200 rounded-full animate-dot-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-blue-200 rounded-full animate-dot-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>
            )}
            <img
                src={src}
                alt={alt}
                style={style}
                className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setError(true)}
            />
        </div>
    );
};

export default ImageWithLoader;