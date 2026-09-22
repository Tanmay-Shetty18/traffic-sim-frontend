import { downloadReport } from '../api/clients';

export default function ReportButton({ jobId }) {
  const handleDownload = async () => {
    const response = await downloadReport(jobId);
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `traffic-sim-report-${jobId}.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return <button onClick={handleDownload}>Download PDF Report</button>;
}