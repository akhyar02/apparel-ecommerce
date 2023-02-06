import Image from "next/image";

export default function ProductPage(){
  return (
    <>
      <section className="h-[33vh] relative">
        <Image src={"https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"} fill alt="product banner" className="object-cover"/>
      </section>
      <section>
        {/* filters */}
      </section>
      <section>
        {/* products */}
      </section>
    </>
  );
}

