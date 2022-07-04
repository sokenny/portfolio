
import * as content from '@/utils/content/mytaggie';
import Head from 'next/head';
import HeaderProject from '@/components/modules/HeaderProject/HeaderProject';
import { NextPage } from "next";
import styles from '../styles/MyTaggie.module.scss';

const MyTaggie:NextPage = ({}) => {

    return(
        <>
            <Head>
                <title>MyTaggie | artesano.dev</title>
            </Head>
            <div className={styles.MyTaggie}>
                
                <HeaderProject project={content.project} />
                {/* <HeaderProject project={project} />
                <CenteredTexts texts={texts} id={1} />
                
                <AssetAndText data={assets[0]} index={0} project={project} />

                <AssetAndText data={assets[1]} index={1} project={project} />

                <CenteredIcons icons={icons} project={project} />

                <AssetAndText data={assets[2]} index={2} project={project} />


                <Integrations integrations={integrations} />
                <Process project={project} process={process} />

                <div className="big-section">

                    <div className="single-asset">
                        <img src="imgs/mytaggie/drafts-1.jpeg" alt="" />
                    </div>

                    <div className="single-asset">
                        <img src="imgs/mytaggie/dashboard.jpg" alt="" />
                    </div>

                    <div className="single-asset">
                        <img src="imgs/mytaggie/presentation.jpg" alt="" />
                    </div>
                    
                    <div className="single-asset">
                        <img src="imgs/mytaggie/components-2.png" alt="" />
                    </div>
                </div>

                <Quote quote={quote} project={project} />
                
                <MoreWork recommended={1} setView={setView} /> */}

            </div>
        </>
    )
}

export default MyTaggie