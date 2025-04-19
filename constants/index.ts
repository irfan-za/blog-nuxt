export const posts = [
  {
    id: 11,
    title: "Revolusi AI Agent: Dari Asisten Virtual ke Sistem Otonom",
    slug: "revolusi-ai-agent",
    excerpt:
      "Bagaimana AI Agent berkembang menjadi sistem cerdas yang mampu mengambil keputusan mandiri",
    content: `
  ## Revolusi AI Agent: Dari Asisten Virtual ke Sistem Otonom
  
  ### Evolusi AI Agent
  1. **Generasi 1**: Rule-based systems (Contoh: Chatbot sederhana)
  2. **Generasi 2**: Machine Learning-powered (Siri/Alexa)
  3. **Generasi 3**: Autonomous agents (GPT-4 + Action Execution)
  
  ### Arsitektur Modern
  \`\`\`python
  class AIAgent:
      def __init__(self):
          self.llm = GPT-4()
          self.memory = VectorDatabase()
          self.tools = [WebSearch(), APICaller()]
          
      def execute_task(self, prompt):
          plan = self.llm.generate_plan(prompt)
          return self._execute_actions(plan)
  \`\`\`
  
  ### Use Cases:
  - **Healthcare**: Diagnosis AI dengan akses ke jurnal medis terbaru
  - **FinTech**: Robo-advisor otonom untuk manajemen portofolio
  - **Smart Home**: Sistem kontrol rumah yang memahami konteks
  `,
    author: "Tech Analyst",
    createdAt: "2025-12-01",
  },
  {
    id: 12,
    title: "Humanoid Robot Terbaru 2025: Melampaui Tesla Optimus",
    slug: "humanoid-robot-2025",
    excerpt:
      "Analisis perkembangan robot humanoid terkini dari berbagai perusahaan teknologi",
    content: `
  ## Humanoid Robot Terbaru 2025
  
  ### Spesifikasi Utama:
  | Fitur           | Tesla Optimus | Boston Atlas | Xiaomi CyberOne |
  |-----------------|---------------|--------------|-----------------|
  | Kecepatan Jalan | 5 km/jam      | 8 km/jam     | 3 km/jam        |
  | Beban           | 20 kg         | 25 kg        | 15 kg           |
  | Sensor          | 28 kamera     | LiDAR+IMU    | 5G + AI Vision  |
  
  ### Teknologi Kunci:
  - **Actuator Linear**: Presisi gerakan 0.1mm
  - **SLAM (Simultaneous Localization and Mapping)**: Navigasi real-time
  - **Haptic Feedback**: Sensor tekanan 4096 level
  
  \`\`\`cpp
  // Contoh kontrol motor servo
  void moveJoint(int jointID, float angle) {
    servo[jointID].writeMicroseconds(
      map(angle, 0, 180, MIN_PULSE, MAX_PULSE)
    );
  }
  \`\`\`
  `,
    author: "Robotics Engineer",
    createdAt: "2025-04-28",
  },
  {
    id: 13,
    title: "Pertahanan Siber di Era AI: Teknik Zero-Trust Terkini",
    slug: "cyber-security-ai-era",
    excerpt: "Strategi mutakhir menghadapi serangan siber yang diperkuat AI",
    content: `
  ## Pertahanan Siber di Era AI
  
  ### Framework Zero-Trust:
  1. **Verify Explicitly**: Multi-factor authentication biometric
  2. **Least Privilege**: Izin akses granular
  3. **Assume Breach**: Micro-segmentation jaringan
  
  ### AI untuk Deteksi Anomali:
  \`\`\`python
  from tensorflow.keras import Sequential
  from keras.layers import LSTM, Dense
  
  model = Sequential([
      LSTM(64, input_shape=(60, 128)),
      Dense(1, activation='sigmoid')
  ])
  model.compile(loss='binary_crossentropy', optimizer='adam')
  \`\`\`
  
  ### Tools Terbaru:
  - **Darktrace Antigena**: Respons otomatis serangan
  - **CrowdStrike Falcon**: Threat hunting berbasis ML
  - **AI-Powered Honeypots**: Jebakan cerdas untuk attacker
  `,
    author: "Cyber Security Expert",
    createdAt: "2025-04-25",
  },
  {
    id: 14,
    title: "LLM Open Source: Alternatif di Luar ChatGPT",
    slug: "llm-open-source",
    excerpt:
      "Perbandingan model bahasa besar open source yang bisa dijalankan di lokal",
    content: `
  ## LLM Open Source Terbaik 2025
  
  ### Benchmark Performa:
  | Model          | Param | Bahasa | GPU Minimal |
  |----------------|-------|--------|-------------|
  | LLaMA 2        | 70B   | Multi  | A100 80GB   |
  | Falcon-40B     | 40B   | EN      | RTX 3090    |
  | BLOOM          | 176B  | 46+     | TPU Pod     |
  | Mistral-7B     | 7B    | EN/FR   | RTX 4080    |
  
  ### Implementasi dengan LangChain:
  \`\`\`python
  from langchain import HuggingFacePipeline
  import torch
  
  model = HuggingFacePipeline.from_model_id(
      "tiiuae/falcon-40b",
      task="text-generation",
      device_map="auto",
      torch_dtype=torch.bfloat16
  )
  \`\`\`
  
  ### Use Case:
  - Document analysis lokal
  - Chatbot khusus domain
  - Kode generation
  `,
    author: "AI Researcher",
    createdAt: "2025-04-22",
  },
  {
    id: 15,
    title: "Quantum Supremacy: Seberapa Dekat Kita?",
    slug: "quantum-supremacy",
    excerpt:
      "Update terbaru perkembangan komputer kuantum dan aplikasi praktisnya",
    content: `
  ## Quantum Supremacy 2025
  
  ### Progress Terkini:
  - **IBM**: 433 qubit Osprey
  - **Google**: 70 qubit dengan error correction
  - **China**: Jiuzhang 3.0 (113 photon)
  
  ### Algoritma Kuantum Populer:
  1. Shor's (Faktorisasi bilangan)
  2. Grover's (Pencarian tidak terstruktur)
  3. QML (Machine Learning Kuantum)
  
  ### Contoh Qiskit:
  \`\`\`python
  from qiskit import QuantumCircuit
  
  qc = QuantumCircuit(2)
  qc.h(0)
  qc.cx(0, 1)
  qc.measure_all()
  \`\`\`
  
  ### Aplikasi Nyata:
  - Optimasi rantai pasok
  - Simulasi molekul untuk obat
  - Kriptografi post-quantum
  `,
    author: "Quantum Physicist",
    createdAt: "2025-04-20",
  },
  {
    id: 16,
    title: "AI dalam Diagnosa Medis: Akurasi Melebihi Dokter?",
    slug: "ai-diagnosa-medis",
    excerpt:
      "Bagaimana AI merevolusi bidang kesehatan dengan analisis data medis",
    content: `
  ## AI dalam Diagnosa Medis
  
  ### Model Terbaik 2025:
  1. **Med-PaLM 2** (Google): Analisis rekam medis
  2. **BioGPT** (Microsoft): Penelitian biomedis
  3. **DeepMind AlphaFold 3**: Prediksi struktur protein
  
  ### Arsitektur Jaringan Syaraf:
  \`\`\`python
  from tensorflow.keras.applications import DenseNet201
  
  model = Sequential([
      DenseNet201(include_top=False, input_shape=(512,512,3)),
      GlobalAveragePooling2D(),
      Dense(256, activation='relu'),
      Dense(10, activation='softmax')  # 10 penyakit
  ])
  \`\`\`
  
  ### Implementasi:
  - Deteksi tumor dari CT-Scan
  - Prediksi risiko kardiovaskular
  - Personalisasi pengobatan kanker
  `,
    author: "Medical AI Specialist",
    createdAt: "2025-04-18",
  },
  {
    id: 17,
    title: "Edge AI: Kecerdasan di Ujung Jaringan",
    slug: "edge-ai",
    excerpt:
      "Teknologi yang memungkinkan AI berjalan di perangkat IoT terbatas",
    content: `
  ## Edge AI: Teknologi Masa Depan
  
  ### Framework Populer:
  - TensorFlow Lite for Microcontrollers
  - ONNX Runtime
  - NVIDIA Jetson Nano
  
  ### Optimasi Model:
  1. Pruning: 
     \`\`\`python
     from tensorflow_model_optimization.sparsity import keras as sparsity
     pruned_model = sparsity.prune_low_magnitude(model)
     \`\`\`
     
  2. Quantization:
     \`\`\`python
     converter = tf.lite.TFLiteConverter.from_keras_model(model)
     converter.optimizations = [tf.lite.Optimize.DEFAULT]
     tflite_model = converter.convert()
     \`\`\`
  
  ### Use Cases:
  - Real-time object detection di drone
  - Predictive maintenance di pabrik
  - Smart camera pengenalan wajah
  `,
    author: "IoT Engineer",
    createdAt: "2025-04-15",
  },
  {
    id: 18,
    title: "Generative AI: Seni dan Etika di Era Digital",
    slug: "generative-ai-etika",
    excerpt: "Tantangan regulasi dan etika dalam penggunaan AI generatif",
    content: `
  ## Generative AI dan Etika
  
  ### Isu Utama:
  - Copyright infringement pada dataset
  - Deepfake detection
  - Bias dalam model generatif
  
  ### Teknik Deteksi AI:
  \`\`\`python
  from transformers import pipeline
  
  detector = pipeline("text-classification", model="roberta-base-openai-detector")
  result = detector("Generated text sample...")
  \`\`\`
  
  ### Framework Governance:
  1. **Watermarking**: Menyisipkan tanda digital
  2. **Provenance Tracking**: Blockchain untuk aset digital
  3. **Content Authentication Initiative**: Standard metadata
  `,
    author: "AI Ethicist",
    createdAt: "2025-04-12",
  },
  {
    id: 19,
    title: "Neuromorphic Computing: Arsitektur Chip Masa Depan",
    slug: "neuromorphic-computing",
    excerpt: "Chip yang meniru otak manusia untuk efisiensi energi ekstrem",
    content: `
  ## Neuromorphic Computing
  
  ### Perbandingan Arsitektur:
  | Fitur          | Von Neumann | Neuromorphic |
  |----------------|-------------|--------------|
  | Komunikasi     | Bus         | Spikes       |
  | Memory         | Terpisah    | In-memory    |
  | Konsumsi Daya  | 100W        | 20mW         |
  
  ### Contoh Chip:
  - **Intel Loihi 2**: 1 juta neuron/chip
  - **IBM TrueNorth**: 4,096 core neurosynaptic
  - **BrainChip Akida**: Edge AI processor
  
  ### Aplikasi:
  - Sensorik prostetik
  - Real-time sensor processing
  - Low-power AI vision
  `,
    author: "Hardware Engineer",
    createdAt: "2025-04-10",
  },
  {
    id: 20,
    title: "AR/VR 2.0: Integrasi dengan AI Spatial Computing",
    slug: "ar-vr-ai-integration",
    excerpt:
      "Generasi berikutnya augmented reality dengan kecerdasan kontekstual",
    content: `
  ## AR/VR 2.0 dengan AI Spatial
  
  ### Teknologi Inti:
  - **Neural Radiance Fields (NeRF)**: 
    \`\`\`python
    def render_nerf(rays, network):
        samples = sample_along_ray(rays)
        rgb, density = network(samples)
        return composite(rgb, density)
    \`\`\`
    
  - **Semantic Understanding**: Objek recognition 3D
  - **Haptic Feedback**: Tekanan dan tekstur virtual
  
  ### Use Cases Industri:
  - Virtual showroom retail
  - Pelatihan bedah dengan simulasi realistik
  - Arsitektur dan interior design
  `,
    author: "XR Developer",
    createdAt: "2025-04-08",
  },
];
