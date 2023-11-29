"use client";
import { useState, useEffect } from "react";
import { VideoBackground } from "@/components/static/VideoBackground";
import { SplashLogo } from "@/components/static/SplashLogo";

import styles from "./page.module.css";
import { DecorativeNavButton } from "@/components/ui/buttons/DecorativeNavButton";
import { DecorativeModalButton } from "@/components/ui/buttons/DecorativeModalButton";
import { DecorativeButton } from "@/components/ui/buttons/DecorativeButton";
import { MailchimpSignupForm } from "@/components/ui/forms/MailchimpSignupForm";
import Footer from "@/components/static/Footer";
import AboutPlaguePoppets from "@/components/ui/homePage/AboutPlaguePoppets";
import SeasonalThread from "@/components/ui/homePage/SeasonalThread";
import SeasonalThreads from "@/components/ui/homePage/SeasonalThreads";
import OnGoingSeasons from "@/components/ui/homePage/OnGoingSeasons";
import ContentSharing from "@/components/ui/homePage/ContentSharing";
import { ReactComponent as HandPointingRight } from "@/assets/svg/HandPointingRight.svg";
import { ReactComponent as HandPointingLeft } from "@/assets/svg/HandPointingLeft.svg";
import NewFooter from "@/components/ui/homePage/NewFooetr";

import { Web3Button, useWeb3ModalTheme } from '@web3modal/react'
import { parseEther } from 'viem'

import { Abi } from "abitype";
import poppetsABI from '@/data/poppetsABI.json'

import { useAccount, useContractReads, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
// import { RpcError } from 'wagmi';



import PortraitBackground from "@/assets/img/splash_portrait.jpg";
import LandscapeBackground from "@/assets/img/splash_landscape.jpg";


const PortraitVideo = `${process.env.NEXT_PUBLIC_URL}/video/splash/Splash_Vertical_v02_na.mp4`;
const LandscapeVideo = `${process.env.NEXT_PUBLIC_URL}/video/splash/Splash_Horizontal_na.mp4`;



export default function Mint() {

    const { address, isConnected } = useAccount()
    const { theme, setTheme } = useWeb3ModalTheme()
    useEffect(() => {
        setTheme({
            themeMode: 'dark',
            themeVariables: {
                '--w3m-font-family': 'Roboto, sans-serif',
                '--w3m-accent-color': 'rgba(255,255,255,0.5)',

                '--w3m-text-medium-regular-size': '0.7rem',
                // ...
            }
        })
    }, [])


    const [numberToMint, setNumberToMint] = useState(1)

    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")

    const contract = {
        address: '0x4E7e8b58353236d56e82a433Ba3100E6f8377c05' as `0x${string}`,
        abi: poppetsABI as Abi,
    }


    const { config } = usePrepareContractWrite({
        ...contract,
        functionName: 'mintPublic',
        args: [
            numberToMint
        ],
        value: parseEther((0.01 * numberToMint).toString()),

        onError(error: any) {
            console.log("ERRORING")
            console.log(JSON.stringify(error))
            console.log(error?.code)
            setErrorMessage(error?.details)
        },
        onSuccess(d) {
            console.log("SUCCESSING")
            console.log(d)
            setErrorMessage("")
        }
    })


    const [txHash, setTxHash] = useState<`0x${string}` | null>(null)

    const {
        data: txData,
        write,
        isLoading: txIsLoading,
        isError: txIsError,
        error: txError,
        isSuccess: txIsSuccess,
    } = useContractWrite({
        ...config,
        onSuccess(data) {
            setTxHash(data.hash)
        },
        onError(error: any) {
            console.log(error);
            setErrorMessage(error?.details || error?.cause)
        }
    })

    const { data: pendingTxData, status: txStatus } = useWaitForTransaction({
        hash: txData?.hash,
        onError(error) {
            console.log("ERROR")
            console.log(error)
            setErrorMessage(error.message)
        },
        onSuccess(data) {
            setSuccessMessage("SUCCESS!")
            refetch?.()
        }
    })

    const { data, isError, isLoading, refetch } = useContractReads({
        contracts: [
            {
                ...contract,
                functionName: 'balanceOf',
                args: [address]
            },
            {
                ...contract,
                functionName: 'phoenixSoulBalance',
                args: [address]
            },
            {
                ...contract,
                functionName: 'tokensOfOwner',
                args: [address]
            }
        ],
        enabled: isConnected,
    })


    return (
        <>
            <div>
                <main className={styles.main} >
                    <div className={`${styles.poppetSplashBackground} h-full w-full -z-20 absolute top-0 left-0 bg-left-top bg-cover bg-no-repeat`}></div>
                    <VideoBackground
                        portraitVideo={{
                            src: PortraitVideo,
                        }}
                        landscapeVideo={{
                            src: LandscapeVideo,
                        }}
                    />
                    <div className="max-w-[60vw] md:max-w-[40vw] min-w-[40w] max-h-[30vh] md:max-h-[20vh] fixed mr-[3vw] top-0 right-0">
                        <SplashLogo />
                    </div>
                    {/* splash secreen buttons */}

                    <div className="grid grid-cols-1 md:grid-cols-3 absolute bottom-0 right-0 md:p-3 mb-2  w-full">
                        <div className="col-span-2 align-center"></div>
                        <div className="grid grid-cols-2 gap-1 w-full mb-[10vh] md:mb-0 xl:pr-14">

                            <div className="col-span-2 text-slate-400 text-xs hover:text-slate-100 text-center mb-6">By signing the transaction to mint Poppet(s), you acknowledge acceptance of our Terms & Conditions, agree that you are purchasing a tokenized piece of art, not anything that might be considered a promise of future profits or equity.</div>

                            {isConnected && (<div className="flex flex-row align-center justify-center col-span-2">
                                <HandPointingLeft onClick={() => { setNumberToMint(numberToMint - 1) }} className="cursor-pointer text-white h-[2em] mt-[40px] select-none" />
                                <DecorativeButton _onClick={() => {
                                    write()
                                }} tailwindClasses="w-full">
                                    <div className="flex flex-col align-center text-center items-center justify-center object-fill">
                                        Mint {numberToMint} Poppet{numberToMint > 1 ? 's' : ''}
                                    </div>
                                </DecorativeButton>
                                <HandPointingRight onClick={() => { setNumberToMint(numberToMint + 1) }} className="cursor-pointer text-white h-[2em] mt-[40px] select-none" />
                            </div>
                            )}
                            <div className="col-span-2 z-99 text-center mt-5 flex flex-col">

                                {isConnected && (
                                    <>
                                        {successMessage && (<div className="text-slate-200 ">{successMessage}</div>)}
                                        {errorMessage && (<div className="text-white ">{errorMessage}</div>)}
                                        {successMessage == "SUCCESS!" && txHash && (<a href={`https://${process.env.NEXT_PUBLIC_CHAIN_ID == "5" ? "goerli." : ""}etherscan.io/tx/${txHash}`} className="text-amber-400 hover:underline">View transaction on Etherscan</a>)}
                                    </>
                                )}



                                <Web3Button />
                            </div>

                        </div>
                    </div>
                </main>

            </div>

        </>
    );
}
