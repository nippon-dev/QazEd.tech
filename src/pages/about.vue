<template>
  <Layout>
      <div class="qaznippontop container-inner mx-auto flex flex-col sm:flex-row justify-between py-10 border-blue-300 border-b-2">
        <div class="text-3xl font-bold w-full sm:w-3/5 text-center sm:text-left">
          <div><span class="font-bold text-blue-300">About</span> <span class="font-bold text-blue-300">QAZ</span><span class="font-bold text-red-700">NIPPON</span></div>
            <div class="text-gray-800">Blended Learning</div>
            <div class="text-gray-800">STEM-Focused</div>
            <div class="text-gray-800">IoT-Based</div>
            <p class="mt-3 mr-3 font-normal text-base"><span class="font-bold text-blue-300">QAZ</span><span class="font-bold">ED.tech</span> was formed in February, 2020, with the aim to use IoT and blended learning technologies to help improve the educational sector in Qazaqstan. <span class="font-bold text-blue-300">QAZ</span><span class="font-bold">ED.tech</span>was founded by educators with nearly 10 years total experience in Qazaqstan and Central Asia focusing on STEM and education.<br />
            <br />
            <strong class="text-xl">What is the meaning of <span class="font-bold text-blue-300">QAZ</span><span class="font-bold">ED.tech?</span></strong><br />
            <br />
            <span class="font-bold text-blue-300">QAZ</span><span class="font-bold">ED.tech</span> is short for Qazaqstan (Qaz) Educational Technlogy (Edtech).<br />
            <br />
            In 2025, the spelling of Kazakhstan will officially change to Qazaqstan to reflect the new alphabet. We will use the spellings &quot;Kazakhstan&quot; and &quot;Qazaqstan&quot; interchangeably with this website. All business project names will use &quot;Qazaqstan&quot;.
           </p>
           
        </div>
        <div class="mt-8 sm:mt-0"> 
          <picture>
           <img data-src="~/assets/css/robotics.svg" alt="STEM and Robotics at QazNippon" class="mx-auto sm:mx-0" width="300" v-lazy-load />
          </picture>
          <picture>
            <source type="image/webp" srcset="~/assets/css/kazakhjapanlogo.webp" alt="Qazaqstan Japan logo" class="mx-auto sm:mx-0" width="300" v-lazy-load />
            <source type="image/png" srcset="~/assets/css/kazakhjapanlogo.png" alt="Qazaqstan Japan logo" class="mx-auto sm:mx-0" width="300" v-lazy-load />
            <img data-src="~/assets/css/kazakhjapanlogo.png" alt="Qazaqstan Japan logo" class="mx-auto sm:mx-0" width="300" v-lazy-load />
          </picture>
        </div>
      <div>
      </div>
    </div> <!-- end qaznippontop container -->

    <div class="blended-learning container-inner mx-auto flex flex-col sm:flex-row justify-between py-10 border-dotted border-blue-300 border-b-2">
        <div class="text-2xl font-bold w-full sm:w-3/5 text-center sm:text-left">
          <div><span title="Web development" class="font-bold text-gray-900">What is Blended Learning?</span></div>
            <div class="text-gray-800">
              <p class="mt-2 mr-3 text-base font-normal">Blended learning is when students interact with their school through online learning via software on their phone, desktop or at a learning center. The learning means include books (downloaded from a learning management system), multimedia (via learning management system) and interaction with a teacher either online or physically at the learning center.<br />
              <br />
              The key elements of blended learning are the students' control over time, when to study, level of study, and pace of study. This flexibility is one of the main reasons why blended learning English schools are popular around the world now. With <span class="font-bold text-blue-300">QAZ</span><span class="font-bold">ED.tech</span>'s chosen blended learning franchise, students will spend 50% in the classroom with a teacher and 50% on multimedia systems.<br />
              <br />
               This means big cost savings since <span class="font-bold text-blue-300">QAZ</span><span class="font-bold">ED.tech</span> will not have to hire as many teachers as traditional &quot;brick and mortar&quot; English schools. Traditionally, ratio of teacher to students are at 1 teacher for every 30 students. At blended learning centers, the ration is 1 teacher for every 300 students.
               </p>
            </div>
        </div>
        <div class="mt-8 sm:mt-0"> 
          <img data-src="~/assets/css/blendedlearning.svg" alt="QazNippon promotes blended learning in Qazaqstan" class="mx-auto sm:mx-0" width="300" v-lazy-load />
        </div>
      <div>
      </div>
    </div> <!-- end blended-learning container -->

      <div class="stem container-inner mx-auto flex flex-col sm:flex-row justify-between py-10 border-dotted border-blue-300 border-b-2">
        <div class="text-2xl font-bold w-full sm:w-3/5 text-center sm:text-left">
          <div><span class="font-bold text-gray-900">What is STEM?</span></div>
            <div class="text-gray-800">
              <h1 class="text-xl font-bold text-center text-red-600">Science, Technology,</h1>
              <h1 class="text-xl font-bold text-center text-red-600">Engineering, and Math</h1>
              <p class="mt-2 mr-3 text-base font-normal">STEM is a curriculum based on promoting the Science, Technology, Engineering and Math disciplines. STEM has become popular in curriculum development at schools around the world.<br />
              <br />
              <span class="font-bold text-blue-300">QAZ</span><span class="font-bold">ED.tech</span> plans to help promote future young engineers in Qazaqstan by partnering with a well known international STEM franchise and offer STEM programs to K-8 students. There will be an emphasis to promote STEM interest to young female students.
              </p>
            </div>
        </div>
        <div class="mt-8 sm:mt-0"> 
          <img data-src="~/assets/css/stem.svg" alt="Sciece, Technology, Engineering and Math is STEM" class="mx-auto sm:mx-0" width="300" v-lazy-load />
        </div>
      <div>
      </div>
    </div> <!-- end stem container -->

          <div class="iot container-inner mx-auto flex flex-col sm:flex-row justify-between py-10">
        <div class="text-2xl font-bold w-full sm:w-3/5 text-center sm:text-left">
          <div><span class="font-bold text-gray-900">What is IoT?</span></div>
            <div class="text-gray-800">
              <h1 class="text-xl font-bold text-center text-red-600">Internet of Things</h1>
              <p class="mt-2 mr-3 text-base font-normal">IoT, in a nutshell, are any devices that are connected to the internet whether they are sensors, mobile phones, tablets, or wearables. With the connected devices, data and information can be shared and analyzed.<br />
              <br />
              In education, IoT has become crucial to help students progress in their studies. Students have more flexibility to do their studies at home at their own pace. Teachers can keep an eye on their progress as well. Parents will also be able to keep track of their children's work. <br />
              <br />
              <span class="font-bold text-blue-300">QAZ</span><span class="font-bold">ED.tech</span> will use IoT to track students enrolled in its blended learning English programs.
              </p>
            </div>
        </div>
          <div class="mt-8 sm:mt-0"> 
            <img data-src="~/assets/css/iot.svg" alt="Sciece, Technology, Engineering and Math is STEM" class="mx-auto sm:mx-0" width="300" v-lazy-load />
          </div>
      <div>
      </div>
    </div> <!-- end iot container -->
    
  </Layout>
</template>


<script>
  export default {
    title: 'About QazEd.tech',
    meta: [{ property: 'og-image', content: '/icon.png' }],
  }

</script>

