import Header from '@/components/header';
import { useState } from 'react';

const texts = {
  placeholder: {
    en: 'Enter your text here...',
    fr: 'Entrez votre texte ici...',
    ar: 'أدخل نصك هنا...',
    dr: 'كتب شي حاجة هنا...',
  },
  label: {
    en: 'Language',
    fr: 'Langue',
    ar: 'اللغة',
    dr: 'اللغة',
  },
  submit: {
    en: 'Submit',
    fr: 'Soumettre',
    ar: 'إرسال',
    dr: 'صيفط',
  },
};
function Home() {
  const [inputValue, setInputValue] = useState('');
  const [lang, setLang] = useState('en'); //['en', 'ar', 'fr', 'dr']
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const response = await fetch('/api/stablediffusion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ value: inputValue, lang }),
    });

    if (response.ok) {
      const data = await response.json();
      setImageUrl(data[0]);
    } else {
      console.error('Error:', response.statusText);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <aside className="bg-gray-200 p-4 flex flex-col w-1/3">
          <form onSubmit={handleSubmit} className="space-y-4" 
          dir={(lang === 'ar' || lang==='dr') ? 'rtl' : 'ltr'}
          >
        <textarea
          rows={4}
          cols={50}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-5 py-3 text-gray-700 bg-gray-100 rounded resize-none"
          placeholder={texts.placeholder[lang]}
        />
         <div className="relative inline-flex items-center w-full">
            <label
              htmlFor="language"
              className="mb-2 text-sm font-bold text-gray-700"
            >
              {texts.label[lang]}
            </label>
            <div className="relative mx-5">
              <select
                id="language"
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="block appearance-none w-full bg-gray-100 border border-gray-400 hover:border-gray-500 px-4 py-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="ar">العربية</option>
                <option value="dr">الدارجة</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12l-5-5 1.5-1.5L10 9.01l3.5-3.5L15 7l-5 5z"
                  />
                </svg>
              </div>
            </div>
          </div>
            <button
              type="submit"
              className="w-full px-3 py-3 text-white font-medium bg-gradient-to-r from-cyan-400 via-green-500 to-cyan-400 rounded-md focus:outline-none disabled:opacity-50"
              disabled={loading || inputValue.length < 3}
            >
              {texts.submit[lang]}
            </button>
          </form>
        </aside>
        <main className="flex-1 p-4">
          {loading && (
            <div className="flex justify-center">
              <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
            </div>
          )}
          {imageUrl && !loading && (
                <div className="flex flex-col items-center">

            <div className="flex justify-center">
              <img
                width={500}
                height={500}
                src={imageUrl}
                alt="Generated image"
                className="rounded-xl shadow-lg"
              />
            </div>
            <div className="flex justify-center mt-4">
            <a
              target='_blank'
              href={imageUrl}
              download
              className="px-4 py-2 text-white font-medium bg-blue-500 rounded-md focus:outline-none hover:bg-blue-700"
            >
              Download
            </a>
          </div>
          </div>
          )}
          
        </main>
      </div>
      <style jsx>{`
        .loader {
          animation: spin 1s linear infinite;
          border-top-color: #3498db;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}

export default Home;