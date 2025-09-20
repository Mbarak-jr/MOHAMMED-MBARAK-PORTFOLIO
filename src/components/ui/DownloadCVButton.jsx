// src/components/ui/DownloadCVButton.jsx
const DownloadCVButton = () => {
  return (
    <div className="mt-12 text-center">
      <a
        href="https://drive.google.com/uc?export=download&id=1BUEzUI6t4qAD_xgXE4KvGtGArB3rZrsZ"
        className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
      >
        📄 Download CV
      </a>
    </div>
  );
};

export default DownloadCVButton;
