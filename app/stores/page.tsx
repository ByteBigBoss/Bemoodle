"use client"
import { doCheckStore } from '@/api/direct/CheckStore';
import { doCreateStore } from '@/api/direct/CreateStore';
import { doLoadStoreCategories } from '@/api/direct/LoadStoreCategory';
import AnimatedBemoodle from '@/components/animations/AnimatedBemoodle';
import FadeIn from '@/components/animations/fade-in';
import Loading from '@/components/common/Loading';
import MoodleButton from '@/components/common/MoodleButton';
import MoodleTitleBlock from '@/components/common/MoodleTitleBlock';
import { Button } from '@/components/ui/button';
import { righteous } from '@/lib/fonts';
import { Image } from '@nextui-org/image';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Stores = () => {

  //STORE CATEGORIES
  const [categories, setCategories] = useState<StoreCategory[]>([]);
  const [limitCategories, setLimitCategories] = useState(10);
  //STORE LIST
  const [storeList, setStoreList] = useState([]);

  const [reqCount, setReqCount] = useState(0);

  const [haveStore, setHaveStores] = useState(false);
  const [onboardingStep1, setOnboardingStep1] = useState(false);
  const [onboardingStep2, setOnboardingStep2] = useState(false);
  const [onboardingStep3, setOnboardingStep3] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");
  const [resMessage, setResMessage] = useState("");

  //STORE DETAILS
  const [storeName, setStoreName] = useState("");
  const [storeDescription, setStoreDescription] = useState("");
  const [storeCategory, setStoreCategory] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {

    setLoading(true);
    const CheckStore = async () => {

      const response: CheckStore = await doCheckStore();

      if (response?.status) {

        if (response.isArtisan) {
          setLoading(false);
          handleOnboarding("list");
          setStoreList(response.storeList);
          if(response.storeList.length > 0) {
            setHaveStores(true);
          }else{
            setHaveStores(false);
          }
        } else {

        }


      } else {
        setLoading(false);
        if (response?.isSignIn) {

        } else {
          router.push("/auth/signin", { scroll: true });
        }


      }

      console.log(response)

    };

    if (reqCount < 1) {
      CheckStore();
    }

  }, []);




  const loadStoreCategories = async () => {

    const response: StoreCategoryList = await doLoadStoreCategories();

    if (response) {
      setCategories(response.storeCategoryList);
      console.log(response)
    }

  };


  const handleOnboarding = (step: "new" | "step1" | "step2" | "step3" | "list") => {
    if (step === "list") {
      setHaveStores(true);
      setOnboardingStep1(false);
      setOnboardingStep2(false);
      setOnboardingStep3(false);

    } else if (step === "step1") {
      if(!haveStore) setHaveStores(false);
      setOnboardingStep1(true);
      setOnboardingStep2(false);
      setOnboardingStep3(false);
    } else if (step === "step2") {
      //LOAD STORE CATEGORIES
      loadStoreCategories();


      if(!haveStore) setHaveStores(false);
      setOnboardingStep1(false);
      setOnboardingStep2(true);
      setOnboardingStep3(false);
    } else if (step === "step3") {

      if(!haveStore) setHaveStores(false);
      setOnboardingStep1(false);
      setOnboardingStep2(false);
      setOnboardingStep3(true);

      if (storeName === "") {
        setMessage("Please enter your Store Name");
      } else if (storeDescription === "") {
        setMessage("Please enter your Store Description");
      } else if (storeCategory === 0) {
        setMessage("Please select your Store Category");
      } else {
        setMessage("");
      }

    } else {
      setHaveStores(false);
      setOnboardingStep1(false);
      setOnboardingStep2(false);
      setOnboardingStep3(false);
    }
  };

  const handleCreateStore = async () => {

    setLoading(true);

    if (message === "") {

      const StoreDTO: StoreDTO = {
        name: storeName,
        description: storeDescription,
        categoryId: storeCategory
      }

      const response: CreateStoreResponse = await doCreateStore(StoreDTO);
      setLoading(false);
      console.log(response)

      if (response.success) {
        router.push("/stores/" + response.store.name, { scroll: true });
      } else {
        if (response.message === "Store Name Taken" || response.message === "Please enter your Store Name") {
          handleOnboarding('step1');
          setResMessage(response.message);
        } else if (response.message === "Please enter your Store Description") {
          handleOnboarding('step1');
          setResMessage(response.message);
        } else {
          setMessage(response.message);
        }
      }


    } else {
      return;
    }

  };

  if (loading) {
    return (
      <div><Loading /></div>
    )
  }

  if (onboardingStep1) {
    return (
      <div className='w-full min-h-screen flex box-border pr-[480px] wide:pr-[36vw] mobile:pr-0 mid:pr-0'>

        {/* STORE CREATE WELCOME FORM */}
        <div className='flex-1 min-h-screen box-border p-[80px] mobile:px-[40px]'>
          <div className='flex flex-col  h-full items-center'>
            <div className='flex flex-col items-end w-full max-w-[466px] justify-center h-full text-center'>

              <FadeIn
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='w-full'
              >

          

                <div className='w-full flex flex-col items-start'>

                  <MoodleTitleBlock title='Opening New Store' subtitle='Start Selling Right Now. Follow steps to set up your Moodle Store.' badge='Bemoodle Store' position='left' />

                  {resMessage === "Store Name Taken" &&
                  <div className='text-[14px] font-medium text-rose-500 mt-[12px]'>{resMessage}</div>
                }
                  {/* STORE NAME */}
                  <div className={`w-full mt-10 ${resMessage==="Store Name Taken"&&"text-rose-500 "}`}>
                    <div className='text-[14px] font-medium text-start'>Store Name</div>
                    <input
                      type="text"
                      placeholder='Your Store Name'
                      className={`${resMessage==="Store Name Taken"&&"border-rose-500 focus:border-rose-500"} border-b w-full focus:border-b-2 focus:border-black h-[68px] font-semibold text-[1.5rem] focus:outline-none bg-white`}
                      value={storeName}
                      onChange={(evt) => {
                        evt.preventDefault;
                        setStoreName(evt.target.value as string);
                      }}
                    />
                  </div>

                  {/* STORE Description */}
                  <div className='w-full mt-10'>
                    <div className='text-[14px] font-medium text-start'>Store Description</div>
                    <textarea
                      placeholder='Store Description'
                      className='w-full border text-[14px] font-medium bg-white border-[#0000001f] mt-[16px] rounded-[12px] min-h-[100px] p-[20px]'
                      value={storeDescription}
                      onChange={(evt) => {
                        evt.preventDefault;
                        setStoreDescription(evt.target.value as string);
                      }}
                    />
                  </div>


                </div>

                <div className='w-full flex justify-end items-center gap-[16px] mt-14'>
                  <Button onClick={() => handleOnboarding(haveStore?"list":"new")} className='text-[15px] font-medium rounded-[14px]'>Back</Button>
                  <MoodleButton onClick={() => handleOnboarding("step2")} variants='action' IconDirection='right' Icon={<ChevronRight size={21} />}>Next</MoodleButton>
                  {/* <Button onClick={() => handleOnboarding("step2")} className=' bg-[#FFD700] text-black border border-black text-[15px] font-medium px-[16px] py-[10px] rounded-[14px] hover:bg-[#FFF309] transform transition-transform duration-200'>Next <ChevronRight size={21} /></Button> */}

                </div>
              </FadeIn>
            </div>
          </div>
        </div >

        {/* IMAGE */}
        < div className='mobile:hidden mid:hidden fixed right-0' >
          <Image src='/store/create-store.webp' alt='SignUp' className='min-h-screen  w-[480px] wide:w-[36vw] rounded-none ' />
        </div >

      </div >
    );
  }

  if (onboardingStep2) {
    return (
      <div className='w-full min-h-screen flex box-border pr-[480px] wide:pr-[36vw] mobile:pr-0 mid:pr-0'>

        {/* STORE CREATE WELCOME FORM */}
        <div className='flex-1 min-h-screen box-border p-[80px] mobile:px-[40px]'>
          <div className='flex flex-col  h-full items-center'>
            <div className='flex flex-col items-end w-full max-w-[466px] justify-center h-full text-center'>

              <FadeIn
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='w-full'
              >
                <div className='w-full flex flex-col items-start'>

                  <MoodleTitleBlock
                    title='Select Store Category'
                    subtitle='Which type of product do you sell?'
                    badge='CATEGORY'
                    position='left'
                  />

                  <div className='flex flex-wrap w-full gap-[12px] mt-[28px]'>
                    {categories.slice(0, limitCategories).map((item) => (
                      <div key={item.id} className={`${storeCategory === item.id ? "bg-black text-white" : "bg-white text-black"} py-[10px] px-[18px] border rounded-full border-[#0000001f] cursor-pointer`} onClick={() => setStoreCategory(item.id)}>
                        <div className={`${storeCategory === item.id ? "opacity-100" : "opacity-65"} text-[14px] font-semibold `}>{item.name}</div>
                      </div>
                    ))}

                    <div className='py-[10px] px-[18px] border rounded-full border-[#000000] bg-[#FFF309] cursor-pointer hover:opacity-80' onClick={() => setLimitCategories(prev => prev === Infinity ? 10 : Infinity)}>
                      <div className='text-[14px] font-semibold'>{limitCategories === Infinity ? "View Less" : "Load All"}</div>
                    </div>

                  </div>

                </div>

                <div className='w-full flex justify-end items-center gap-[16px] mt-14'>
                  <Button onClick={() => handleOnboarding("step1")} className='text-[15px] font-medium rounded-[14px]'>Back</Button>
                  {/* <Button onClick={() => handleOnboarding("step3")} className=' bg-[#FFD700] text-black border border-black text-[15px] font-medium px-[16px] py-[10px] rounded-[14px] hover:bg-[#FFF309] transform transition-transform duration-200'>Next <ChevronRight size={21} /></Button> */}
                  <MoodleButton onClick={() => handleOnboarding("step3")} variants='action' IconDirection='right' Icon={<ChevronRight size={21} />}>Next</MoodleButton>
                </div>
              </FadeIn>
            </div>
          </div>
        </div >

        {/* IMAGE */}
        < div className='mobile:hidden mid:hidden fixed right-0' >
          <Image src='/store/create-store.webp' alt='SignUp' className='min-h-screen  w-[480px] wide:w-[36vw] rounded-none ' />
        </div >

      </div >
    );
  }

  if (onboardingStep3) {
    return (
      <div className='w-full min-h-screen flex box-border pr-[480px] wide:pr-[36vw] mobile:pr-0 mid:pr-0'>

        {/* STORE CREATE WELCOME FORM */}
        <div className='flex-1 min-h-screen box-border p-[80px] mobile:px-[40px]'>
          <div className='flex flex-col  h-full items-center'>
            <div className='flex flex-col items-end w-full max-w-[466px] justify-center h-full '>

              <FadeIn
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='w-full'
              >
                <div className='w-full flex flex-col items-start'>

                  <MoodleTitleBlock
                    title='Review Your Store Details'
                    subtitle='Is everything correct?'
                    badge='REVIEW'
                    position='left'
                  />

                  {message !== "" &&
                    <div className='text-[14px] font-medium text-rose-500 mt-[12px]'>{message}</div>
                  }

                  <div className='w-full rounded-[24px] border mt-[40px] border-[#0000001f] box-border p-[30px] flex flex-col items-start'>
                    <div className='text-[1.5rem] font-semibold'>{storeName ? storeName : "Your Store"}</div>
                    <div className='text-[14px] font-medium mt-[12px]'>{storeDescription ? storeDescription : "Tell us about your store"}</div>
                    <div className='text-[10px] mt-[16px] font-semibold bg-moodleShadeYellow border border-black py-[6px] px-[8px] rounded-[6px] w-fit'>{storeCategory ? categories.find(category => category.id === storeCategory)?.name : "Store Category"}</div>
                  </div>

                </div>

                <div className='w-full flex justify-end items-center gap-[16px] mt-14'>
                  <Button onClick={() => handleOnboarding("step2")} className='text-[15px] font-medium rounded-[14px]'>Back</Button>
                  <Button onClick={handleCreateStore} disabled={message === "" ? false : true} className={`${message === "" ? "hover:bg-moodleShadeYellow bg-moodleYellow" : "bg-white"}  text-black border border-black text-[15px] font-medium px-[16px] py-[10px] rounded-[14px]  transform transition-transform duration-200`}>{message === "" ? "Create" : "Fill Details"}</Button>

                </div>
              </FadeIn>
            </div>
          </div>
        </div >

        {/* IMAGE */}
        < div className='mobile:hidden mid:hidden fixed right-0' >
          <Image src='/store/create-store.webp' alt='SignUp' className='min-h-screen  w-[480px] wide:w-[36vw] rounded-none ' />
        </div >

      </div >
    );
  }


  if (haveStore) {
    return (
      <div className='w-full min-h-screen flex box-border pr-[480px] wide:pr-[36vw] mobile:pr-0 mid:pr-0'>

        {/* STORE CREATE WELCOME FORM */}
        <div className='flex-1 min-h-screen box-border p-[80px] mobile:px-[40px]'>
          <div className='flex flex-col  h-full items-center'>
            <div className='flex flex-col items-end w-full max-w-[466px] justify-center h-full '>

              <FadeIn
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='w-full'
              >
                <div className='w-full flex flex-col items-start'>

                <MoodleTitleBlock
                    title='Your Stores'
                    subtitle='Select your store and continue'
                    badge='STORES'
                    position='left'
                  />


                  <div>
                    {storeList.map((store: StoreListItem) => (
                    <Link href={"/stores/"+store.name} key={store.id}>
                      <div  className={`hover:bg-moodleShadeYellow hover:border-black cursor-pointer  w-full rounded-[24px] border mt-[40px] border-[#0000001f] box-border p-[30px] flex flex-col items-start`}>
                      <div className='text-[1.5rem] font-semibold'>{store.name}</div>
                      <div className='text-[14px] font-medium mt-[12px]'>{store.description}</div>
                      <div className='text-[10px] mt-[16px] font-semibold bg-moodleShadeYellow border border-black py-[6px] px-[8px] rounded-[6px] w-fit'>{store.storeCategory.name}</div>
                    </div>
                    </Link>
                    ))}
                  </div>

                </div>


                <div className='w-full flex justify-end items-center gap-[16px] mt-14'>
                  <Link href={"/"}><Button  className='text-[15px] font-medium rounded-[14px]'>Back to Home</Button></Link>
                  <Button onClick={() => handleOnboarding("step1")} className={`hover:bg-moodleShadeYellow bg-moodleYellow  text-black border border-black text-[15px] font-medium px-[16px] py-[10px] rounded-[14px]  transform transition-transform duration-200`}>Create New Store</Button>

                </div>
              </FadeIn>
            </div>
          </div>
        </div >

        {/* IMAGE */}
        < div className='mobile:hidden mid:hidden fixed right-0' >
          <Image src='/store/create-store.webp' alt='SignUp' className='min-h-screen  w-[480px] wide:w-[36vw] rounded-none ' />
        </div >

      </div >
    )
  }

  if (!haveStore) {

    return (
      <div className='w-full min-h-screen flex box-border pr-[480px] wide:pr-[36vw] mobile:pr-0 mid:pr-0'>

        {/* STORE CREATE WELCOME FORM */}
        <div className='flex-1 min-h-screen box-border p-[80px] mobile:px-[40px]'>
          <div className='flex flex-col justify-between h-full items-center'>
            <div className='flex flex-col items-center w-full max-w-[466px] justify-center h-full text-center'>

              <FadeIn
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='w-full'
              >
                <div className='w-full flex flex-col items-center'>
                  <div className='text-[36px] font-bold'>Start Your Online</div>
                  <div className='text-[32px] font-semibold'>Artisan Store Right Now!</div>

                  <div className='w-8/12 mt-[18px]'>Build & Scale Your Own Seller Store to Sell Your Artisan Works</div>

                  <Button onClick={() => handleOnboarding("step1")} className='mt-8 bg-moodleYellow text-black border border-black text-[15px] font-medium px-[16px] py-[10px] rounded-[14px] hover:bg-moodleShadeYellow hover:scale-105 transform transition-transform duration-200'>Open New Store <ChevronRight size={21} /></Button>
                  <Link href={"/"} className='font-semibold text-[14px] mt-[24px]'>Back to Home</Link>

                </div>
              </FadeIn>
            </div>


            {/* WELCOME FOOTER */}
            <FadeIn
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
              className='w-full'
            >
              <div className='w-full flex items-center justify-center text-[14px] opacity-65 font-medium h-fit pt-20'>
                <div >Open Your Store In Bemoodle</div>
              </div>
            </FadeIn>
          </div>
        </div>

        {/* IMAGE */}
        <div className='mobile:hidden mid:hidden fixed right-0'>
          <Image src='/store/create-store.webp' alt='SignUp' className='min-h-screen  w-[480px] wide:w-[36vw] rounded-none ' />
        </div>

      </div>
    )

  }
}

export default Stores
