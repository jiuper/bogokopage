import {PageLayout} from "@/layouts/PageLayout";
import {
    BlockFive,
    BlockFour,
    BlockOne,
    BlockSeven,
    BlockSix,
    BlockThree,
    BlockTwo
} from "@/components/molecule/Blocks/Blocks";

export default function Home() {

    return (
        <PageLayout title={`BogOko`}>
            <>
                <BlockOne/>
                <BlockTwo/>
                <BlockThree/>
                <BlockSeven/>
                <BlockFour/>
                <BlockFive/>
                <BlockSix/>
            </>
        </PageLayout>
    )
}