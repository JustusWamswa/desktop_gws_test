import React from 'react'
import { Box, Typography } from '@mui/material'
import { motion } from "motion/react"


function SVGSection() {
    return (
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} width={'100%'} height={'100vh'}>
            <svg width="1100" height="800" viewBox="0 0 1300 880" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M259.251 20.3657C196.437 27.0018 135.108 56.4063 89.9956 101.714C46.7109 145.077 18.9585 200.34 9.47923 262.123C6.62403 280.315 6.73824 324.594 9.47923 342.786C17.0169 391.297 35.2902 435.004 63.8421 473.218C74.4634 487.291 98.1044 511.661 112.152 522.988C152.581 555.482 199.521 575.962 251.028 583.17L264.848 585.115L253.427 586.488C201.805 592.552 154.98 612.46 113.18 645.869C101.188 655.48 78.0038 678.706 68.0678 691.063C49.9087 713.717 32.5492 744.266 23.0699 770.009C18.0448 783.739 12.106 807.537 9.70764 823.212C8.67977 829.733 7.6519 843.463 7.19507 853.76L6.50983 872.524L80.859 872.181L155.208 871.838L156.008 858.566C158.749 811.084 187.186 768.407 230.814 746.44C265.533 728.934 307.447 727.79 343.765 743.465C373.116 756.165 402.582 785.569 414.574 814.173C421.198 830.076 425.538 850.442 425.652 866.003V872.41H574.921L574.236 856.163C570.924 783.395 545.342 723.442 495.775 672.07C450.092 624.703 400.069 598.044 338.397 587.976C330.745 586.717 322.522 585.687 320.01 585.573C317.497 585.573 321.837 584.543 329.489 583.399C392.646 573.903 446.552 547.015 490.636 502.851C534.72 458.687 529.695 458.115 544.885 427.681C564.643 388.094 573.779 348.849 573.893 303.541C573.893 257.661 564.414 215.9 544.771 176.427C541.344 169.677 537.69 162.812 536.548 161.095C535.405 159.494 534.378 157.777 534.378 157.434C534.378 157.091 553.793 156.748 577.434 156.748H620.49V19.1072H444.496C347.648 19.336 264.505 19.7937 259.594 20.3657H259.251ZM269.416 168.189C260.622 169.448 248.173 173.109 238.237 177.113C197.808 193.818 169.484 226.884 158.292 270.704C155.551 281.574 155.208 284.892 155.094 301.368C155.094 312.809 155.665 322.877 156.579 327.683C169.37 392.556 224.304 438.093 289.859 438.322C327.548 438.322 360.439 424.592 387.392 397.361C412.061 372.419 425.652 338.781 425.652 302.512C425.652 266.242 412.975 234.664 388.42 209.15C367.406 187.182 338.511 172.308 309.503 168.189C299.567 166.816 278.895 166.816 269.302 168.189H269.416Z" fill="#006DFF" fillOpacity="0.3" />
                <path d="M291.801 493.126C402.81 493.126 492.806 407.087 492.806 300.91C492.806 194.733 402.81 108.694 291.801 108.694" stroke="#FFFDFA" strokeWidth="15" />
                <motion.line
                    x1="380" y1="115" x2="700" y2="115"
                    stroke="black" strokeWidth="3" strokeDasharray="3 3" strokeDashoffset="5"
                    initial={{ strokeDashoffset: 100, strokeOpacity: 0 }}
                    whileInView={{ strokeDashoffset: 0, strokeOpacity: 1 }}
                    transition={{ duration: 2, ease: "linear", delay: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                />

                <motion.line
                    x1="540" y1="305" x2="700" y2="305"
                    stroke="black" strokeWidth="3" strokeDasharray="3 3" strokeDashoffset="5"
                    initial={{ strokeDashoffset: 100, strokeOpacity: 0 }}
                    whileInView={{ strokeDashoffset: 0, strokeOpacity: 1 }}
                    transition={{ duration: 2, ease: "linear", delay: 3 }}
                    viewport={{ once: true, amount: 0.8 }}
                />
                <motion.line
                    x1="380" y1="495" x2="700" y2="495"
                    stroke="black" strokeWidth="3" strokeDasharray="3 3" strokeDashoffset="5"
                    initial={{ strokeDashoffset: 100, strokeOpacity: 0 }}
                    whileInView={{ strokeDashoffset: 0, strokeOpacity: 1 }}
                    transition={{ duration: 2, ease: "linear", delay: 5 }}
                    viewport={{ once: true, amount: 0.8 }}
                />
                <foreignObject x="750" y="30" width="550" height="400">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, ease: "linear", delay: 1 }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <Box>
                            <Typography fontWeight={700} >Lorem ipsum dolor</Typography>
                            <Typography >
                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            </Typography>
                        </Box>
                    </motion.div>
                </foreignObject>
                <foreignObject x="750" y="230" width="550" height="400">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, ease: "linear", delay: 3 }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <Box>
                            <Typography fontWeight={700} >Lorem ipsum dolor</Typography>
                            <Typography >
                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            </Typography>
                        </Box>
                    </motion.div>
                </foreignObject>
                <foreignObject x="750" y="450" width="550" height="400">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 2, ease: "linear", delay: 5 }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <Box>
                            <Typography fontWeight={700} >Lorem ipsum dolor</Typography>
                            <Typography >
                                sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            </Typography>
                        </Box>
                    </motion.div>
                </foreignObject>
                <motion.path d="M492.806 300.91C492.806 407.086 402.81 493.126 291.801 493.126" stroke="#0071CE" strokeWidth="10"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 3 }}
                    viewport={{ once: true, amount: 0.8 }}
                />
                <motion.path d="M291.801 108.694 C402.81 108.694 492.806 194.733 492.806 300.91" stroke="#0071CE" strokeWidth="10"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 3, delay: 1 }}
                    viewport={{ once: true, amount: 0.8 }}
                />
                <path d="M291.23 139.014C305.737 139.014 317.497 127.232 317.497 112.698C317.497 98.1647 305.737 86.3829 291.23 86.3829C276.722 86.3829 264.962 98.1647 264.962 112.698C264.962 127.232 276.722 139.014 291.23 139.014Z" fill="#0071CE" stroke="#0071CE" strokeWidth="3" />
                <path d="M290.316 124.712V107.206L286.319 108.236V104.804L292.143 102.286H294.77V124.712H290.316Z" fill="white" />
                <path d="M492.235 330.086C506.742 330.086 518.503 318.304 518.503 303.77C518.503 289.237 506.742 277.455 492.235 277.455C477.728 277.455 465.967 289.237 465.967 303.77C465.967 318.304 477.728 330.086 492.235 330.086Z" fill="#0071CE" stroke="#0071CE" strokeWidth="3" />
                <path d="M484.583 315.784V312.58C485.953 311.436 487.324 310.406 488.58 309.262C489.837 308.118 491.093 307.088 492.121 306.059C493.149 304.914 493.948 303.885 494.519 302.855C495.09 301.825 495.433 300.795 495.433 299.88C495.433 298.965 495.433 298.736 495.09 298.278C494.862 297.821 494.519 297.363 494.062 297.02C493.605 296.677 493.034 296.562 492.235 296.562C491.435 296.562 490.864 296.677 490.293 297.02C489.837 297.363 489.38 297.821 489.151 298.393C488.923 298.965 488.809 299.537 488.809 300.338H484.583C484.583 298.736 485.04 297.363 485.725 296.219C486.41 295.075 487.324 294.274 488.466 293.702C489.608 293.13 490.864 292.901 492.349 292.901C493.834 292.901 495.204 293.244 496.346 293.816C497.488 294.388 498.288 295.189 498.859 296.219C499.43 297.249 499.773 298.393 499.773 299.651C499.773 300.91 499.544 301.596 499.202 302.512C498.859 303.427 498.402 304.342 497.717 305.258C497.146 306.173 496.346 306.974 495.661 307.775C494.862 308.576 494.062 309.377 493.149 310.063C492.349 310.75 491.435 311.436 490.636 312.122H500.229V315.669H484.583V315.784Z" fill="white" />
                <path d="M291.23 521.158C305.737 521.158 317.497 509.376 317.497 494.842C317.497 480.309 305.737 468.527 291.23 468.527C276.722 468.527 264.962 480.309 264.962 494.842C264.962 509.376 276.722 521.158 291.23 521.158Z" fill="#0071CE" stroke="#0071CE" strokeWidth="3" />
                <path d="M291.23 507.199C289.745 507.199 288.489 506.97 287.232 506.398C285.976 505.826 285.062 505.025 284.377 503.995C283.692 502.851 283.235 501.478 283.235 499.877H287.461C287.461 500.563 287.689 501.25 287.918 501.822C288.26 502.394 288.603 502.851 289.174 503.195C289.745 503.538 290.43 503.652 291.23 503.652C292.029 503.652 292.6 503.538 293.171 503.195C293.742 502.851 294.085 502.508 294.427 502.05C294.656 501.593 294.884 501.021 294.884 500.334C294.884 499.648 294.656 498.961 294.313 498.504C293.971 498.046 293.399 497.588 292.828 497.359C292.143 497.131 291.458 497.016 290.658 497.016H288.945V493.469H290.658C291.686 493.469 292.6 493.241 293.285 492.783C293.97 492.325 294.427 491.524 294.427 490.609C294.427 489.694 294.199 489.122 293.628 488.664C293.171 488.206 292.372 487.977 291.458 487.977C290.544 487.977 289.631 488.321 289.06 488.893C288.489 489.465 288.146 490.266 288.146 491.067H283.92C283.92 489.694 284.377 488.435 284.948 487.405C285.633 486.376 286.547 485.575 287.575 485.117C288.717 484.545 289.973 484.316 291.458 484.316C292.943 484.316 294.313 484.545 295.341 485.117C296.483 485.689 297.283 486.376 297.854 487.291C298.425 488.206 298.653 489.236 298.653 490.266C298.653 491.295 298.539 491.868 298.196 492.554C297.854 493.241 297.397 493.813 296.94 494.27C296.369 494.728 295.798 495.071 295.113 495.186C295.912 495.3 296.711 495.643 297.283 496.215C297.968 496.673 298.425 497.245 298.767 498.046C299.11 498.847 299.338 499.648 299.338 500.677C299.338 501.707 298.996 503.08 298.425 504.11C297.854 505.14 296.94 505.94 295.798 506.627C294.656 507.199 293.285 507.542 291.572 507.542L291.23 507.199Z" fill="white" />
            </svg>
        </Box>
    )
}

export default SVGSection