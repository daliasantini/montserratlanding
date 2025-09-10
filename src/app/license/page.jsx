'use client';

import Link from 'next/link';

import { MdKeyboardBackspace } from 'react-icons/md';

export default function License() {
  return (
    <div className='flex flex-col justify-start h-full w-full mt-3 mb-8 text-center gap-4 pb-6 pt-2 px-20'>
      <Link
        href='/'
        className='flex hover:underline justify-start align-middle text-xs gap-2 text-tertiary'
      >
        <MdKeyboardBackspace className='text-lg' />
        Home Page
      </Link>
      <div className='w-full border-t-1 border-b-1 border-disabled flex justify-start align-middle py-4'>
        <p className='text-3xl font-medium'>
          Montserrat / <span className='font-bold italic'>License</span>
        </p>
      </div>

      <div className=' flex flex-col justify-start xl:mr-40 lg:mr-40 md:mr-30'>
        <p className='text-justify text-xs font-medium'>
          Copyright 2024 The Montserrat.Git Project Authors
          <br />
          <br />
          (https://github.com/JulietaUla/Montserrat.git) This Font Software is
          licensed under the SIL Open Font License, Version 1.1 . This license
          is copied below, and is also available with a FAQ at:
          https://openfontlicense.org SIL OPEN FONT LICENSE Version 1.1 - 26
          February 2007
        </p>

        <br />
        <p className='text-justify text-xs font-medium'>
          These fonts are licensed under the Open Font License. You can use them
          in your products & projects – print or digital, commercial or
          otherwise. This isn't legal advice, please consider consulting a
          lawyer and see the full license for all details.
        </p>

        <br />

        <p className='uppercase text-md font-medium text-left'>Preamble</p>
        <p className='text-justify text-xs font-medium'>
          "Font Software" refers to the set of files released by the Copyright
          The goals of the Open Font License (OFL) are to stimulate worldwide
          development of collaborative font projects, to support the font
          creation efforts of academic and linguistic communities, and to
          provide a free and open framework in which fonts may be shared and
          improved in partnership with others.
          <br />
          <br />
          The OFL allows the licensed fonts to be used, studied, modified and
          redistributed freely as long as they are not sold by themselves. The
          fonts, including any derivative works, can be bundled, embedded,
          redistributed and/or sold with any software provided that any reserved
          names are not used by derivative works. The fonts and derivatives,
          however, cannot be released under any other type of license. The
          requirement for fonts to remain under this license does not apply to
          any document created using the fonts or their derivatives.
        </p>

        <br />

        <p className='uppercase text-md font-medium text-left'>Definitions</p>
        <p className='text-justify text-xs font-medium'>
          "Font Software" refers to the set of files released by the Copyright
          Holder(s) under this license and clearly marked as such. This may
          include source files, build scripts and documentation.
          <br />
          <br />
          "Reserved Font Name" refers to any names specified as such after the
          copyright statement(s). "Original Version" refers to the collection of
          Font Software components as distributed by the Copyright Holder(s).
          <br />
          <br />
          "Modified Version" refers to any derivative made by adding to,
          deleting, or substituting -- in part or in whole -- any of the
          components of the Original Version, by changing formats or by porting
          the Font Software to a new environment.
          <br />
          <br />
          "Author" refers to any designer, engineer, programmer, technical
          writer or other person who contributed to the Font Software.
        </p>

        <br />

        <p className='uppercase text-md font-medium text-left'>
          PERMISSION & CONDITIONS
        </p>
        <p className='text-justify text-xs font-medium'>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of the Font Software, to use, study, copy, merge, embed,
          modify, redistribute, and sell modified and unmodified copies of the
          Font Software, subject to the following conditions:
        </p>
        <br />
        <ul className='text-justify text-xs flex flex-col gap-3 font-medium list-disc list-inside'>
          <li>
            Neither the Font Software nor any of its individual components, in
            Original or Modified Versions, may be sold by itself.
          </li>

          <li>
            Original or Modified Versions of the Font Software may be bundled,
            redistributed and/or sold with any software, provided that each copy
            contains the above copyright notice and this license. These can be
            included either as stand-alone text files, human-readable headers or
            in the appropriate machine-readable metadata fields within text or
            binary files as long as those fields can be easily viewed by the
            user.
          </li>

          <li>
            No Modified Version of the Font Software may use the Reserved Font
            Name(s) unless explicit written permission is granted by the
            corresponding Copyright Holder. This restriction only applies to the
            primary font name as presented to the users.
          </li>

          <li>
            The name(s) of the Copyright Holder(s) or the Author(s) of the Font
            Software shall not be used to promote, endorse or advertise any
            Modified Version, except to acknowledge the contribution(s) of the
            Copyright Holder(s) and the Author(s) or with their explicit written
            permission.
          </li>

          <li>
            The Font Software, modified or unmodified, in part or in whole, must
            be distributed entirely under this license, and must not be
            distributed under any other license. The requirement for fonts to
            remain under this license does not apply to any document created
            using the Font Software.
          </li>
        </ul>

        <br />
        <p className='uppercase text-md font-medium text-left'>Termination</p>
        <p className='text-justify text-xs font-medium'>
          This license becomes null and void if any of the above conditions are
          not met.
        </p>
        <br />

        <p className='uppercase text-md font-medium text-left'>Disclaimer</p>
        <p className='text-justify text-xs font-medium'>
          THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
          OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
          COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
          INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
          DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
          FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
          OTHER DEALINGS IN THE FONT SOFTWARE.
        </p>
        <br />

        <p className='text-left text-xs font-medium text-disabled'>
          Source:{' '}
          <Link href='https://fonts.google.com/specimen/Montserrat/license'>
            https://fonts.google.com/specimen/Montserrat/license
          </Link>{' '}
        </p>
      </div>

      <div className='flex justify-end text-[11px] underline pb-4 font-medium'>
        <Link href='/allvariants' className='justify-right'>
          See font variants
        </Link>
      </div>
    </div>
  );
}
