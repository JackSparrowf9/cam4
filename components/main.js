import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-screen'>
        {/* <div className="flex h-screen"></div> */}
        <div className='flex flex-col w-full justify-center items-end mt-[30px] h-5/6 z-60'>
          {/* <div className='flex w-full bg-slate-400'>111</div> */}
          <div className='relative flex items-center justify-center w-full h-5/6 z-40'>
            <div className='mx-3 w-full h-[460px] md:w-[480px] bg-white/90 rounded-md'>
              {/* site name  */}
              <div className='flex justify-center items-center my-2 '>
                <a className='text-2xl font-bold text-black'>LIVESEXCAM</a>
                <a className='text-2xl font-bold text-orange-600'>4</a>
              </div>

              {/* alert you must 18+ */}
              <div className='flex text-[10px] justify-center space-x-1'>
                <a className='font-semibold'>You must be over 18</a>
                <a>and agree to the terms below before entering this site</a>
              </div>

              {/* WARNING */}
              <div className='flex flex-col justify-center items-center space-y-1 w-full h-[70px] bg-[#e5e5e5] mt-2'>
                <a className='text-sm text-red-600'>
                  WARNING: Sexually Explicit Adult Material
                </a>

                <div className='w-full flex flex-row justify-center items-center space-x-3'>
                  <div>
                    <Image
                      src='/images/enter/icra.png'
                      width='67px'
                      height='25px'
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/enter/rta.png'
                      width='67px'
                      height='25px'
                    />
                  </div>
                  <div>
                    <Image
                      src='/images/enter/safelabeling.gif'
                      width='67px'
                      height='25px'
                    />
                  </div>
                </div>
              </div>

              {/* text rules area  */}
              <div className='flex w-full my-2  h-[240px]'>
                <div className='flex flex-col bg-[#e5e5e5] w-full rounded-md my-4 mx-4 overflow-auto text-[11px] text-justify'>
                  <p className='flex flex-col place-content-around  px-2 py-2'>
                    This website provides access to sexually explicit material,
                    information, opinion, links, images and videos
                    (collectively, the “Sexually Explicit Material”). DO NOT
                    ENTER this site if:
                  </p>
                  <ul className='list-disc px-8 py-1 space-y-1'>
                    <li>
                      You are not 18 years of age OR the age of majority in each
                      and every jurisdiction in which you will or may view the
                      Sexually Explicit Material, whichever is higher (the “Age
                      of Majority”)
                    </li>
                    <li>You are offended by Sexually Explicit Material</li>
                    <li>
                      It is not legal to view Sexually Explicit Material in each
                      and every community in which you choose to view it.
                    </li>
                  </ul>
                  <p className='flex flex-col place-content-around text-[11px] px-2 py-2'>
                    If you choose to enter this website you are affirming UNDER
                    OATH and subject to the penalties of perjury under Title 28
                    USC §1746 and other applicable laws that ALL of the
                    following statements are true and correct:
                  </p>
                  <ul className='list-disc px-8 py-1 space-y-1'>
                    <li>
                      I have obtained the Age of Majority in the jurisdiction in
                      which I intend to view Sexually Explicit Material;
                    </li>
                    <li>
                      It is my desire to receive and view Sexually Explicit
                      Material;
                    </li>
                    <li>
                      I believe it is my inalienable right as an adult to view
                      Sexually Explicit Material;
                    </li>
                    <li>
                      I will not expose minors to the Sexually Explicit
                      Material. I am viewing it for my own personal use;
                    </li>
                    <li>
                      I believe that sexual acts between consenting adults is
                      neither obscene nor offensive;
                    </li>
                    <li>
                      I agree that the Sexually Explicit Material found at this
                      website is intended to be used by responsible adults as
                      sexual aids, for sexual education, discussion, commentary,
                      enjoyment and entertainment;
                    </li>
                    <li>
                      I understand and agree that my use of this website is
                      subject to and governed by the website’s Terms which I
                      have read and accepted and I agree to be bound by such
                      Terms.
                    </li>
                    <li>
                      I agree that providing a false declaration under the
                      penalties of perjury is a criminal offense; and
                    </li>
                    <li>
                      I agree that this agreement is governed by the Electronic
                      Signatures in Global and National Commerce Act (“E-Sign
                      Act”), 15 USC §7000, et. seq., and that by choosing to
                      click on “I Agree” and indicating my agreement to be bound
                      by the terms of this agreement and the Terms of the
                      website I affirmatively adopt the signature line below as
                      my signature and the manifestation of my consent to be
                      bound by the terms of this agreement and the Terms of the
                      website.
                    </li>
                  </ul>
                </div>
              </div>
              <div className='w-full h-[1px] bg-gray-700/40'></div>
              <div className='flex w-full py-4 px-4 space-x-4 justify-center items-center'>
                <div className='flex border-2 px-10 py-1 rounded-sm border-black cursor-pointer'>
                  <Link href='https://livesexcam4.com' className='w-full h-fit'>
                    Exit
                  </Link>
                </div>
                <div className='flex border-2 px-8 py-1 rounded-sm border-orange-500 bg-orange-500 cursor-pointer'>
                  <Link href='/join' className='flex w-full h-fit px-4'>
                    I Agree
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* image background  */}
        <Image
          className='object-cover blur-[8px] h-fit'
          src={`/bg.png`}
          layout='fill'
        />
      </div>
      {/* <div>test</div> */}
    </div>
  );
};

export default Main;
