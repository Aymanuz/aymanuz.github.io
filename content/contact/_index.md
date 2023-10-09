---
title: "Request to start a project"
date: 2022-11-05
draft: false
description: "About"
disableList: true
disableAvailable: true
---
<h1 class="text-center pt-16">Request to start a project</h1>
<p class="text-center my-8">Curious if I'm the right fit for your project? Request a project below, and I'll reach out within two business days with a discovery call link. Excited to meet you and answer your questions!</p>

<form action="https://formcarry.com/s/Hup7tNY1aT" method="POST" accept-charset="UTF-8" class="flex flex-col gap-7 mt-14">
  <label class="block">
    <span class="block text-base font-normal text-neutral-400">Full name*</span>
    <input class="bg-[#ffffff1e] border-[#ffffff33] placeholder-neutral-600 shadow_inner rounded-lg w-full py-2 px-2 mt-1"  type="text" name="name" placeholder="Michael Scott..." required/>
  </label>
  <label class="block">
    <span class="block text-base font-normal text-neutral-400">Email Address*</span>
    <input class="bg-[#ffffff1e] border-[#ffffff33] placeholder-neutral-600 shadow_inner rounded-lg w-full py-2 px-2 mt-1" type="email" name="email" placeholder="email@example.com" required/>
  </label>
  <label class="block">
    <span class="block text-base font-normal text-neutral-400">Company name</span>
    <input class="bg-[#ffffff1e] border-[#ffffff33] placeholder-neutral-600 shadow_inner rounded-lg w-full py-2 px-2 mt-1" type="text" name="company" placeholder="Dunder Mifflin, Inc."/>
  </label>

  <label class="flex flex-col gap-2 required">
    <span class="block text-base font-normal text-neutral-400">Service*</span>
    <div class="flex flex-row items-center gap-2"><input name="service[]" value="product_design" id="service1" type="checkbox" class="bg-[#ffffff1e] border-[#ffffff33] rounded-md shadow_inner"/><label for="service1">Product Design</label></div>
    <div class="flex flex-row items-center gap-2"><input name="service[]" value="landing_page_design" id="service2" type="checkbox" class="bg-[#ffffff1e] border-[#ffffff33] rounded-md shadow_inner"/><label for="service2">Landing page Design</label></div>
    <div class="flex flex-row items-center gap-2"><input name="service[]" value="design_consultation" id="service3"type="checkbox" class="bg-[#ffffff1e] border-[#ffffff33] rounded-md shadow_inner"/><label for="service3">Design Consultation</label></div>
    <div class="flex flex-row items-center gap-2"><input name="service[]" value="other" id="service4" type="checkbox" class="bg-[#ffffff1e] border-[#ffffff33] rounded-md"/><label for="service4">Other</label></div>
  </label>
  
  <label class="block">
    <span class="block text-base font-normal text-neutral-400" for="budget">What is your budget for this project?*</span>
    <input class="bg-[#ffffff1e] border-[#ffffff33] placeholder-neutral-600 shadow_inner rounded-lg w-full py-2 px-2 mt-1"  type="text" name="budget" placeholder="10000$" required/>
  </label>

  <label class="block">
    <span class="block text-base font-normal text-neutral-400">Project Timeline (Estimate)</span>
    <select class="bg-[#ffffff1e] border-[#ffffff33] placeholder-neutral-600 shadow_inner rounded-lg w-full py-2 px-2 mt-1" type="text" name="timeline" required>
      <option value="">Please select...</option>
      <option value="2-4 weeks from now">2-4 weeks from now</option>
      <option value="1-2 months from now">1-2 months from now</option>
      <option value="2-4 months from now">2-4 months from now</option>
      <option value="More than 6 months from now">More than 6 months from now</option>
    </select>
  </label>

  <label class="block">
    <span class="block text-base font-normal text-neutral-400">Is there anything else you can share about the project?*</span>
    <textarea class="bg-[#ffffff1e] border-[#ffffff33] placeholder-neutral-600 shadow_inner rounded-lg w-full py-2 px-2 mt-1" name="description" placeholder="Type here" required></textarea>
  </label>
<label class="flex self-start">
<button type="submit" value="Submit" class="px-6 py-2 bg-primary-600 hover:bg-primary-700 ease-in duration-100 border-[#ffffff33] rounded-full font-semibold flex self-start shadow_drop">Submit</button>
</label>
  <span class="block text-xs font-normal text-neutral-400">I use a third-party application, Formcarry, to manage and process the information you submit through this form.</span>
</form>
