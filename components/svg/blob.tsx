export const Blob = ({ imageUrl }: { imageUrl?: string }) => {

    const Path = () => {
        return <path d="M808.946 300.776C878.662 347.844 945.974 397.208 968.812 461.496C992.852 524.636 972.418 603.848 939.964 671.58C906.308 739.312 859.43 796.712 800.532 812.784C742.836 828.856 671.918 804.748 609.414 794.416C545.708 784.084 491.618 787.528 409.882 778.344C326.944 769.16 218.764 747.348 174.29 689.948C129.816 631.4 151.452 536.116 195.926 461.496C240.4 386.876 308.914 334.068 381.034 287C451.952 241.08 526.476 202.048 598.596 204.344C670.716 207.788 740.432 252.56 808.946 300.776Z" fill="url(#paint0_linear_124_2)" stroke="#0F272C" />

    }

    return (
        <svg width="1202" height="1148" viewBox="0 0 1202 1148" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <clipPath id="blobClip">
                    <Path />
                </clipPath>
                <linearGradient id="paint0_linear_124_2" x1="564.584" y1="204.248" x2="564.584" y2="818.159" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FC4F00" />
                    <stop offset="1" stopColor="#FCB500" />
                </linearGradient>
            </defs>
            <Path />
            {imageUrl && <image href={imageUrl} clipPath="url(#blobClip)" height="848" width="1202" />}
        </svg>
    );
}