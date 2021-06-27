import React from 'react'

interface ProductFeatureProps {
    layout?: string
    gridArea?: string
    featureName: string
    featureIcon?: string
    title: string
    description: string | JSX.Element
    docsUrl?: string
    image?: string
    imageClasses?: string
    bgImage?: string
}

export const ProductFeature = ({
    // bgColor = 'navy',
    layout,
    featureName,
    featureIcon,
    title,
    description,
    docsUrl,
    image,
    imageClasses,
    bgImage,
}: ProductFeatureProps) => {
    // const backgroundColorClass = `bg-${bgColor}`
    return (
        <div
            className={`py-12 px-8 ${layout}`}
            style={
                bgImage
                    ? {
                          background: `url(${bgImage}) no-repeat center center`,
                          backgroundSize: 'cover',
                      }
                    : undefined
            }
        >
            {/* only render if {image} exists */}
            {image && (
                <figure className="flex justify-center items-center md:h-48">
                    <img src={`${image}`} className={imageClasses} style={{ height: 'max-content' }} />
                </figure>
            )}

            <div>
                {/* only render if featureName exists */}
                {featureName && (
                    <div className="feature-name flex justify-center items-center gap-2 mb-2">
                        {featureIcon && <img src={`${featureIcon}`} alt={`${featureName} icon`} />}
                        <div className="font-bold text-pink">{featureName}</div>
                    </div>
                )}

                <h3 className="mb-2 font-osiris font-normal text-2xl lowercase">{title}</h3>
                <div className="text-white text-opacity-70">
                    {React.isValidElement(description) ? description : <p>{description}</p>}
                </div>

                {/* only render if {docsUrl} exists */}
                {docsUrl && (
                    <a href={docsUrl} className="p-2 bg-white bg-opacity-10 rounded text-white">
                        Docs &rarr;
                    </a>
                )}
            </div>
        </div>
    )
}
