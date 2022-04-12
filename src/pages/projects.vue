<template>
  <Layout>
    <div
      class="qaznippontop container-inner mx-auto flex flex-col sm:flex-row justify-between py-10 border-blue-300 border-b-2"
    >
      <div class="text-3xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div>
          <span class="font-bold text-blue-300">Innovating in Education</span>
        </div>
        <div class="text-gray-800">Blended Learning</div>
        <div class="text-gray-800">STEM-Focused</div>
        <div class="text-gray-800">IoT-Based</div>
        <p class="mt-3 mr-3 font-normal text-base">
          <span class="font-bold text-blue-300">QAZ</span
          ><span class="font-bold">ED.tech</span> is an Educational Technology
          company currently focusing on two projects to improve the educational
          sector in Qazaqstan. This includes establishing Qazaqstan's first
          Blended Learning English Center. It will be followed by integrating a
          STEM K-8 Project with the blended learning center and other
          institutions across Qazaqstan.<br />
          <br />
          <strong>Project Start:</strong> Feb. 7, 2020.<br />
          <strong>Project Updated:</strong> Feb. 6, 2021.<br />
        </p>
      </div>
      <div class="mt-8 sm:mt-0">
        <picture>
          <source
            type="image/webp"
            srcset="~/assets/css/japanimage.webp"
            alt="Image of Japan with rising sun and Qazaqstan eagle"
            class="mx-auto sm:mx-0"
            width="300"
            v-lazy-load
          />
          <source
            type="image/png"
            srcset="~/assets/css/japanimage.png"
            alt="Image of Japan with rising sun and Qazaqstan eagle"
            class="mx-auto sm:mx-0"
            width="300"
            v-lazy-load
          />
          <img
            data-src="~/assets/css/japanimage.png"
            alt="Image of Japan with rising sun and Qazaqstan eagle"
            class="mx-auto sm:mx-0"
            width="300"
            v-lazy-load
          />
        </picture>
      </div>
      <div></div>
    </div>
    <!-- end qaznippontop container -->

    <div
      class="blendedlearning-center container-inner mx-auto flex flex-col sm:flex-row justify-between py-10 border-dotted border-blue-300 border-b-2"
    >
      <div class="text-2xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div>
          <span title="Web development" class="font-bold text-gray-900"
            >Blended Learning English Center</span
          >
        </div>
        <div class="text-gray-800">
          <h1 class="text-xl font-bold text-red-600">First Center in Almaty</h1>
          <p class="mt-2 mr-3 text-base font-normal">
            <span class="font-bold text-blue-300">QAZ</span
            ><span class="font-bold">ED.tech</span> will establish the first
            blended learning center for Qazaqstan in Almaty. The master
            franchise chosen to enter the Qazaqstan market already has an
            international repution in providing quality blended learning courses
            in Europe and Asia. They currently offer blended learning programs
            in Russia and parts of Eastern Europe.<br />
            <br />
            The teaching method of this program will focus on practical
            communication skills. Multimedia lessons and topic-based classes
            facilitated will by teachers who will help students overcome their
            language barriers. In addition, learning in small groups will create
            a comfortable, friendly and convenient communication environment
            that is efficient for accurate pronunciation practice and discussion
            of a variety of topics.<br />
            <br />
            With this learning model, this blended learning center ensures that
            the tailor-made courses are not only tailored to each individuals’
            needs and goals, but also provide results for each student.
          </p>
        </div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img
          data-src="~/assets/css/blendedlearningmodel.svg"
          alt="QazNippon promotes the blended learning model in Qazaqstan"
          class="mx-auto sm:mx-0"
          width="300"
          v-lazy-load
        />
        <img
          data-src="~/assets/css/qaznipponclassroom.svg"
          alt="QazNippon blended learning classroom"
          class="pt-6 mx-auto sm:mx-0"
          width="300"
          v-lazy-load
        />
      </div>
      <div></div>
    </div>
    <!-- end blendedlearning-center container -->

    <div
      class="stem-k-8 container-inner mx-auto flex flex-col sm:flex-row justify-between py-10"
    >
      <div class="text-2xl font-bold w-full sm:w-3/5 text-center sm:text-left">
        <div><span class="font-bold text-gray-900">STEM K-8 Project</span></div>
        <div class="text-gray-800">
          <h1 class="text-xl font-bold text-red-600">
            Molding Future Engineers
          </h1>
          <p class="mt-2 mr-3 text-base font-normal">
            <span class="font-bold text-blue-300">QAZ</span
            ><span class="font-bold">ED.tech</span> will work with an
            international franchise to provide STEM courses to Qazaqstan. The
            aim is to integrate this program with the blended learning centers
            across Qazaqstan.<br />
            <br />
            <span class="font-bold text-blue-300">QAZ</span
            ><span class="font-bold">ED.tech</span> will also work with local
            and international schools to help set up STEM after school and
            summer programs.
          </p>
        </div>
      </div>
      <div class="mt-8 sm:mt-0">
        <img
          data-src="~/assets/css/robotics.svg"
          alt="STEM and Robotics at QazNippon"
          class="mx-auto sm:mx-0"
          width="300"
          v-lazy-load
        />
      </div>
      <div></div>
    </div>
    <!-- end stem-k-8 container -->
  </Layout>
</template>

<script>
export default {
  title: 'QAZEd.tech Projects.',
  meta: [{ property: 'og-image', content: '/icon.png' }]
}
</script>
