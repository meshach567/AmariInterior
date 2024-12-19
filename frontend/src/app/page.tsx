'use client';
import Layout from '@/components/common/layouts/Layout';
import Material from '@/components/common/Material';


export default function Home() {
  return (
    <Layout cleanMainCss={true} useHero={false}>
      <Material />
    </Layout>
  );
}
