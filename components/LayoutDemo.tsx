import React, { useEffect } from 'react';
import { CanvasDemo } from './CanvasDemo';

declare global {
  interface Window {
    jQuery: any;
    $: any;
  }
}

export const LayoutDemo: React.FC = () => {
  useEffect(() => {
    const $ = window.jQuery;
    if ($) {
      // jQuery interaction from prompt
      $('.js-sidebar-item').on('click', function() {
        // Reset color for all items
        $('.js-sidebar-item').css('color', '');
        // Set red color for clicked item
        $(this).css('color', 'red');
        // Slide toggle the image area
        $('.js-img-area').slideToggle('slow');
      });
    }
    return () => {
      if ($) {
        $('.js-sidebar-item').off('click');
      }
    };
  }, []);

  return (
    <div className="container mx-auto p-4 md:p-8">
      {/* 
        Main Area
        res.css: width: 70%; display: inline-block; vertical-align: top;
      */}
      <main className="w-full md:inline-block md:w-[70%] align-top">
        
        {/* 
          Text Paragraph
          res.css: line-height: 2; width: 60%; display: inline-block; padding-right: 10px; ...
        */}
        <p className="w-full md:w-[60%] inline-block align-top pr-[10px] box-border m-0 leading-[2] mb-4 md:mb-0">
          テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります
        </p>
        
        {/* 
          Image Area
          res.css: height: 150px; width: calc(40% - 6px); background-color: #ccc; ...
        */}
        <div className="js-img-area bg-[#ccc] h-[150px] w-full md:w-[calc(40%-6px)] inline-block align-top mb-8"></div>

        <hr className="my-8 border-gray-300" />

        {/* 
          Canvas Section (Sample 92)
        */}
        <div className="mb-8">
           <h3 className="font-bold mb-2 text-lg">Canvas描画 (Sample 92)</h3>
           <CanvasDemo />
        </div>

        {/* 
          Media Section 
        */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold mb-2 text-lg">動画サンプル</h3>
            {/* Fixed: Removed 'type' attribute from video element as it's not a valid property on the video tag itself */}
            <video controls src="media/samplevideo.mp4" className="w-full max-w-[400px] border border-gray-300 shadow-sm"></video>
          </div>
          <div>
            <h3 className="font-bold mb-2 text-lg">音声サンプル</h3>
            <audio controls src="media/school_song.mp3" className="w-full max-w-[400px]"></audio>
          </div>
        </div>
      </main>

      {/* 
        Sidebar
        res.css: width: calc(30% - 26px); display: inline-block; margin-left: 20px; border: solid 1px;
      */}
      <aside className="w-full mt-8 md:mt-0 md:w-[calc(30%-26px)] md:ml-[20px] inline-block box-border border border-solid border-black p-4 align-top bg-white">
        <ul className="list-disc pl-5 space-y-2">
          <li className="js-sidebar-item cursor-pointer hover:underline">テキスト (クリックで動作)</li>
          <li className="js-sidebar-item cursor-pointer hover:underline">テキスト (クリックで動作)</li>
          <li className="js-sidebar-item cursor-pointer hover:underline">テキスト (クリックで動作)</li>
        </ul>
      </aside>
    </div>
  );
};